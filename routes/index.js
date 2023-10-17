const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("roter loaded");

router.get('/', homeController.home);

// for any further routes, access from here
router.use('/students', require('./students'));

router.use('/users', require('./users'));


module.exports = router;