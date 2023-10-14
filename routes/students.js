const express = require('express');

const router = express.Router();
const studentsController = require('../controllers/students_controller');

router.get('/details', studentsController.details);

module.exports = router;