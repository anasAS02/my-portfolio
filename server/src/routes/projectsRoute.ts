import express from 'express';
const router = express.Router();

import {getAllProjects, addProject, getProject, updateProject, deleteProject} from '../controllers/projectControllers';

router.route('/')
        .get(getAllProjects);

router.route('/add')
        .post(addProject);

router.route('/:projectId')
        .get(getProject);

router.route('/update/:projectId')
        .put(updateProject);

router.route('/delete/:projectId')
        .delete(deleteProject);

export { router as projectsRoute };
