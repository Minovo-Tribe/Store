const express = require('express');

const auth = require('../controller/auth.controller');

const router = express.Router();

router.post('/login', auth.postLogin);
router.post('/signup', auth.postSignUp);

module.exports = router;
