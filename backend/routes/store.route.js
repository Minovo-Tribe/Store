const express = require('express');
const store = require('../controller/store.controller');

const router = express.Router();

router.post('/sideMenu/reset', store.resetSideMenu);
router.post('/sideMenu/drop', store.dropSideMenu);
router.post('/sideMenu', store.postSideMenu);
router.patch('/sideMenu', store.patchSideMenu);
router.get('/sideMenu', store.getSideMenu);

module.exports = router;
