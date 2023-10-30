import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { authRoute } from './routes/authRoute';
import { projectsRoute } from './routes/projectsRoute';
import { sendEmail } from './utils/ContactMe';
import { httpStatusText } from './utils/httpStatusText';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const URL: string | undefined = process.env.MONGO_URL;


app.use(cors());
app.use(express.json());

mongoose.connect(URL || '')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use('/auth', authRoute);
app.use('/projects', projectsRoute);

app.post('/contactMe', sendEmail)

app.all('*', (req, res) => {
  res.status(404).json({ status: 'Error', message: 'This resource is not available' });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.statusCode || 500).json({ status: err.statusText || httpStatusText.ERROR, message: err.message, code: err.statusCode || 500, data: null });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
