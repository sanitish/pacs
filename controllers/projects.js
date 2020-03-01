const mongoose = require('mongoose');

const Projects = require('../models/projects');
// const Owner = require('../models/owner');
// const Users = require('../models/users');
// const Buildings = require('../models/buildings');



exports.addProject = function (req, res, next) {
  const { name, description, projectManager, resources } = req.body;
console.log(resources);
  if (!name) {
    return res.status(422).send({
      error: 'You should provide info'
    });
  } else {
    Projects.find({
      name: name
    })
      .then((task) => {
        console.log(task);
        if (task.length > 0) {
          res.json({
            code: 400,
            message: "task alreay exits"
          });
        } else {
          const newProject = new Projects({
            name, 
            description, 
            projectManager
          })
          console.log(newProject)
          newProject.resources.push(projectManager);
          newProject.save()
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


exports.getAllProjects = function (req, res, next) {
  Projects.find({
  })
    .populate('projectManager')
    .populate('resources')
    .then((projects) => {

      res.json({
        projects
      });
    }).catch((err) => {
      next(err)
    })
}


exports.addProjectResources = function (req, res, next) {
  const {projectId,resources} = req.body;

  Projects.findById({
    _id:projectId
  })
    .then((project) => {

      resources.forEach(resource => {
        project.resources.push(resource);
      });
      project.save()
        .then((result) => {
          res.json({
            code: 200,
            message: result
          })
        }).catch((err) => {
          next(err);
        })
    }).catch((err) => {
      next(err)
    })
}


exports.deleteAllProjects = function (req, res, next) {
  Projects.remove({
  })
    .then((projects) => {

      res.json({
        projects
      });
    }).catch((err) => {
      next(err)
    })
}
