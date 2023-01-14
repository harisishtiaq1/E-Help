const mongoose = require('mongoose')
const answerSchema = new mongoose.Schema({
        question_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        },
    answer: String,
    created_at: {
        type: Date,
        default: Date.now(),
      },
    user: Object,
    comments: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comments',
        },
});

module.exports = mongoose.model("Answers", answerSchema);