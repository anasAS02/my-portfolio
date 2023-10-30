const Project = require('../models/projectModel');
const httpStatusText = require('../utils/httpStatusText');
const appError = require('../utils/appError');
const asyncWrapper = require('../middlewares/asyncWrapper');

const getAllProjects= asyncWrapper(
    async(req, res) => {
        const projects = await Project.find();
        res.status(200).json({status: httpStatusText.SUCCESS, data: projects});
    }
)

const addProject = asyncWrapper(
    async (req, res, next) => {
        const { title, liveLink, sourceCode, img, desc, tools, test } = req.body;

        if (!title || !liveLink || !sourceCode || !img || !desc || !tools.length) {
            const error = appError.create('all fields are required', 401, httpStatusText.ERROR);
            return next(error);
        }

        const project = new Project({
            title,
            liveLink,
            sourceCode,
            img,
            desc,
            tools,
            test,
        });

        await project.save();
        res.status(201).json({ status: httpStatusText.SUCCESS, data: project });
    }
);


const getProject = asyncWrapper(
    async(req, res) => {
        const id = req.params.projectId;
        const project = await Project.find({_id: id});
        res.status(200).json({status: httpStatusText.SUCCESS, data: project})
    }
)

const updateProject = asyncWrapper(
    async(req, res) => {
        const projectId = req.params.projectId;
        const updatedProject = await Project.updateOne({_id: projectId}, {$set: {... req.body}});
        res.status(200).json({status: httpStatusText.SUCCESS, data: null});
    }
)

const deleteProject = asyncWrapper(
    async(req, res) => {
        const projectId = req.params.projectId;
        await Project.deleteOne({_id: projectId});
        res.status(200).json({status: httpStatusText.SUCCESS, data: null});
    }
)

module.exports = {
    getAllProjects,
    addProject,
    getProject,
    updateProject,
    deleteProject
};