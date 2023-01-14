const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({

    title: String,
    body: String,
    tags: [],
    created_at: {
        type: Date,
        default: Date.now(),
      },
    user: Object,
    comments: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
});

module.exports = mongoose.model("Questions",questionSchema);