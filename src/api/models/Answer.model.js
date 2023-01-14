// const mongoose = require('mongoose');

<<<<<<< HEAD

const AnswerSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId,required: true, ref: 'User' },
  Questionid:{createdBy:{ref:"User"}},
  Comment: { type: String,require:true },
}, { timestamps: true }
);
=======
// /**
//  * Contact Schema
//  * @private
//  */
// const AnswerSchema = new mongoose.Schema({
//   Userid:{createdBy:{ref:"User"}},
//   Questionid:{createdBy:{ref:"User"}},
//   Comment: { type: String,require:true },
// }, { timestamps: true }
// );
>>>>>>> 0acad686f2d22be86a1bf2de7aeeb5da50326200

// /**
//  * @typedef AnswerSchema
//  */


// module.exports = mongoose.model('Votes', AnswerSchema);