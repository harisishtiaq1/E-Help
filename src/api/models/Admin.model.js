const mongoose = require('mongoose');


const AdminSchema = new mongoose.Schema({
  Email:{type:String,require:true},
  Password:{type:String,require:true}
}, { timestamps: true }
);

/**
 * @typedef AdminSchema
 */


module.exports = mongoose.model('Contact', AdminSchema);