const mongoose = require('mongoose');


const AnswerSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId,required: true, ref: 'User' },
  Questionid:{createdBy:{ref:"User"}},
  Comment: { type: String,require:true },
}, { timestamps: true }
);

/**
 * @typedef AnswerSchema
 */


module.exports = mongoose.model('Votes', AnswerSchema);