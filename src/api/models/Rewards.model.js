const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
  Userid:{createdBy:{ref:"User"}},
  Votes: { type: Number,require:true },
  Reward:{type:String,require:true},
}, { timestamps: true }
);

/**
 * @typedef RewardsSchema
 */


module.exports = mongoose.model('Votes', VoteSchema);