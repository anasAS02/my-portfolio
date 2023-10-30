const express = require('express');
const router = express.Router();
const projectControllers = require('../controllers/projectControllers');

router.route('/')
        .get(projectControllers.getAllProjects);

router.route('/add')
        .post(projectControllers.addProject);

router.route('/:projectId')
        .get(projectControllers.getProject);

router.route('/update/:projectId')
        .put(projectControllers.updateProject);

router.route('/delete/:projectId')
        .delete(projectControllers.deleteProject);

module.exports = router;