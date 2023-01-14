// const mongoose = require('mongoose');

<<<<<<< HEAD
const QuestionSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId,required: true, ref: 'User' },
  Title: { type: String,require:true },
  Description:{type:String,require:true},
}, { timestamps: true }
);

/**
 * @typedef QuestionSchema
 */
module.exports = mongoose.model('Question', QuestionSchema);
=======
// /**
//  * Contact Schema
//  * @private
//  */
// const QuestionSchema = new mongoose.Schema({
//   // createdBy: { type: mongoose.Schema.Types.ObjectId,required: true, ref: 'User' },
//   Title: { type: String,require:true },
//   Description:{type:String,require:true},
// }, { timestamps: true }
// );

// /**
//  * @typedef QuestionSchema
//  */


// module.exports = mongoose.model('Question', QuestionSchema);
>>>>>>> 0acad686f2d22be86a1bf2de7aeeb5da50326200
