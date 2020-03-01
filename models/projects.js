const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  projectManager: {
    type: Schema.Types.ObjectId,
    ref: 'resource'  
  },
  resources:[{
    resource:{
    type: Schema.Types.ObjectId,
    ref: 'resource',
  },
  allocationDate:{
    type:String
  }
}
]
});



var Projects = mongoose.model('project', ProjectSchema);
module.exports = Projects;
