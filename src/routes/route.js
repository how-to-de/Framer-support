const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.post('/get-sha256', controller.getSHA256);

module.exports = router;