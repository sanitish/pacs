const mongoose = require('mongoose');

const Timesheets = require('../models/timeSheet');
const Projects = require('../models/projects');

// const Owner = require('../models/owner');
// const Users = require('../models/users');
// const Buildings = require('../models/buildings');



exports.addTimeSheet = function (req, res, next) {
    const {
        resourceId,
        projectsTime,
        date,
        inTime,
        outTIme } = req.body;

    if (!resourceId) {
        return res.status(422).send({
            error: 'You should provide info'
        });
    } else {
        Timesheets.find({
          resourceId,
          date
        })
        .then((task) => {
          console.log(task);
          if(task.length>0){
            res.json({
              code:400,
              message:"sheet alreay exits"
            });
          }else{
              const newTimeSheet = new Timesheets({
                  resourceId,
                  projectsTime,
                  date,
                  inTime,
                  outTIme
              })
              newTimeSheet.save()
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


exports.updateTimeSheet = function(req, res, next) {
    const {timeSheetId}=req.body;
    Timesheets.findById({
        _id:timeSheetId
      })
      .populate('resourceId','name')
      .then((timeSheets) => {
  
        res.json({
          timeSheets
        });
      }).catch((err) => {
        next(err)
      })
  }



exports.getAllTimeSheets = function(req, res, next) {
    Timesheets.find({
      })
      .populate('resourceId','name')
      .then((timeSheets) => {
  
        res.json({
          timeSheets
        });
      }).catch((err) => {
        next(err)
      })
  }

