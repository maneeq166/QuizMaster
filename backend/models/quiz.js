const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    question: String,
    options: [String],
    answer: String
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
