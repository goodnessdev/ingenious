const mongoose = require("mongoose");
const Quiz = require("../models/quizModel");

// get all questions
const getQuestions = async (req, res) => {
  const quizzes = await Quiz.find({}).sort({ createdAt: -1 });

  res.status(200).json(quizzes);
};

// create new question
const createQuestion = async (req, res) => {
  const { question, options, correctOption } = req.body;

  try {
    const quiz = await Quiz.create({ question, options, correctOption });
    res.status(200).json(quiz);

  } catch (error) {
    res.status(400).json({error: error.msg});
  }
};


module.exports = {
    getQuestions,
    createQuestion
}