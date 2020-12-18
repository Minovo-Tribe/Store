const express = require('express');

const userController = require('../controller/user.controller');

const router = express.Router();

router.post('/becomeSeller', userController.becomeSeller);
router.get('/state', userController.getUserState);
router.get('/', userController.getUser);
router.post('/', userController.postCreateProfile);

module.exports = router;
