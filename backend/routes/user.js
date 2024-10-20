const express = require('express');
const {
    signupUser,
    loginUser
} = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();
// router.use(requireAuth);

router.post('/signup', signupUser);

router.post('/login', loginUser);

module.exports = router;