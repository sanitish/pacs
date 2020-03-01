const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const resources = require('../controllers/resources');
// Load User Model

router.post('/addresource', resources.addResource);
router.get('/getAllResources', resources.getAllResources);
router.post('/getMyProjects', resources.getMyProjects);

router.get('/deleteAll', resources.deleteAll);

module.exports = router;
