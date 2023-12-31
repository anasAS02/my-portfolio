import { Request, Response, NextFunction } from 'express';
import Project from '../models/projectModel';
import { httpStatusText } from '../utils/httpStatusText';
import AppError from '../utils/appError';
import {asyncWrapper} from '../middlewares/asyncWrapper';

const getAllProjects = asyncWrapper(
  async (req: Request, res: Response) => {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: projects });
  }
);

const addProject = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, liveLink, sourceCode, img, desc, tools, test } = req.body;

    if (!title || !liveLink || !sourceCode || !img || !desc || !tools.length) {
      const error = new AppError('All fields are required', 401, httpStatusText.ERROR);
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
    const projects = await Project.find();
    res.status(201).json({ status: httpStatusText.SUCCESS, data: projects });
  }
);

const getProject = asyncWrapper(
  async (req: Request, res: Response) => {
    const id = req.params.projectId;
    const project = await Project.find({ _id: id });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: project });
  }
);

const updateProject = asyncWrapper(
  async (req: Request, res: Response) => {
    const projectId = req.params.projectId;
    await Project.updateOne({ _id: projectId }, { $set: { ...req.body } });
    const projects = await Project.find();
    res.status(200).json({ status: httpStatusText.SUCCESS, data: projects });
  }
);

const deleteProject = asyncWrapper(
  async (req: Request, res: Response) => {
    const projectId = req.params.projectId;
    await Project.deleteOne({ _id: projectId });
    const projects = await Project.find();
    res.status(200).json({ status: httpStatusText.SUCCESS, data: projects });
  }
);

export {
  getAllProjects,
  addProject,
  getProject,
  updateProject,
  deleteProject,
};
