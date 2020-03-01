const express = require('express');
const router = express.Router();

const projects = require('../controllers/projects');

router.post('/addProject',projects.addProject);
router.post('/addProjectResources',projects.addProjectResources);


router.get('/deleteAllProjects',projects.deleteAllProjects);
router.get('/getAllProjects',projects.getAllProjects);

module.exports = router;
