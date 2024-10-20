const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define Quiz schema and model
const quizSchema = new Schema({
    question: {
        type: String
    },
    options: {
        type: [String]
    },
    correctOption: {
        type: String
    }
});

module.exports = mongoose.model('Quiz', quizSchema);


