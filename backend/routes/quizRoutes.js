const express = require('express');
const {
    getQuestions,
    createQuestion
} = require('../controllers/quizController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

// Endpoint to get quiz questions
router.get('/', getQuestions);

// Endpoint to create questions
router.post('/generateQuiz', createQuestion);

module.exports = router;