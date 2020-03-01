const mongoose = require('mongoose');

const Resources = require('../models/resources');
const Projects = require('../models/projects');


exports.addResource = function(req, res, next) {
  const {
    name,
    employeeId,
      department
  } = req.body;
  console.log(req.body)
  if (!employeeId || !name) {
    return res.status(422).send({
      error: 'You should provide info'
    });
  } else {
    Resources.find({
      employeeId
      })
      .then((resource) => {
        console.log(resource);
        if (resource.length > 0) {
          res.json({
            code: 400,
            message: "resource alreay exits"
          });
        } else {
          const newResource = new Resources({
            name,
            employeeId,
            department
          })
          newResource.save()
            .then((result) => {
              res.json({
                code: 200,
                message: result
              })
            }).catch((err) => {
              next(err);
            })
        }
      }).catch((err) => {
        next(err);
      })
  }
}



 exports.getAllResources = function(req, res, next) {
  Resources.find({
    })
    .then((resources) => {
      res.json({
        resources
      });
    }).catch((err) => {
      next(err)
    })
}

exports.getMyProjects = function(req, res, next) {
  const {resourceId}= req.body;
  Projects.find({
    resources:[resourceId]
    })
    .then((resources) => {
      res.json({
        resources
      });
    }).catch((err) => {
      next(err)
    })
}

exports.deleteAll = function(req, res, next) {
  Resources.remove({
    })
    .then((resources) => {
      res.json({
        resources
      });
    }).catch((err) => {
      next(err)
    })
}


//  exports.getTaskForWorker = function(req, res, next) {
//   AllocateTasks.find({
//     workerId:req.params.id
//     })
//     .then((tasks) => {
//       res.json({
//         tasks
//       });
//     }).catch((err) => {
//       next(err)
//     })
// }
