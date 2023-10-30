import { Document, model, Schema } from 'mongoose';

interface Project extends Document {
  title: string;
  liveLink: string;
  sourceCode: string;
  img: string;
  desc: string;
  tools: string[];
  test?: string[];
}

const projectSchema = new Schema<Project>({
  title: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  sourceCode: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  tools: {
    type: [String],
    required: true,
  },
  test: {
    type: [String],
  },
}, { timestamps: true });

const ProjectModel = model<Project>('Project', projectSchema);

export default ProjectModel;
