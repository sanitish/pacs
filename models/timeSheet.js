const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = require('./users');
// const Rooms = require('./rooms');
// Create Schema

const TimeSheetSchema = new Schema({

    resourceId: {
        type: Schema.Types.ObjectId,
        ref: 'resource'
    },
    projectsTime: [
        {
            type: Schema.Types.ObjectId,
            ref: 'project',
            status: {
                type: String
            },
            ProjectHour: {
                type: String
            }
        }
    ],
    date: {
        type: String
    },
    inTime: {
        type: String
    },
    outTIme: {
        type: String
    }

});


var Timesheets = mongoose.model('timesheet', TimeSheetSchema);
module.exports = Timesheets;
