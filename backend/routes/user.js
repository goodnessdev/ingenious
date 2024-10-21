const express = require('express');
const {
    signupUser,
    loginUser
} = require('../controllers/userController');
// const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for user routes
// router.use(requireAuth);

// sign up user
router.post('/signup', signupUser);

// log in user
router.post('/login', loginUser);

module.exports = router;