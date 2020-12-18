const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ extended: true }));

module.exports = router;
