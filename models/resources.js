const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ResourceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  employeeId:
    {
      type: String,
      required: true
    },
    department:
    {
      type: String,
      required: true
    }


});

var Resource = mongoose.model('resource', ResourceSchema);
module.exports = Resource;
