const mongoose = require('mongoose');


const QVoteSchema = new mongoose.Schema({
  Userid:{createdBy:{ref:"User"}},
  Questionid:{createdBy:{ref:"User"}},
  Title: { type: String,require:true },
  Description:{type:String,require:true},
}, { timestamps: true }
);

/**
 * @typedef QVotesSchema
 */


module.exports = mongoose.model('QVotes', QVoteSchema);