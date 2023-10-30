import express from 'express';
const app = express();
import cors from 'cors';
require('dotenv').config();

app.use(express.json());
app.use(cors());

import mongoose from 'mongoose';

const url = process.env.MONGO_URL;

const httpStatusText = require('./utils/httpStatusText');

const authRoute = require('./routes/authRoute')
const projectRoute = require('./routes/projectRoute')

mongoose.connect(url).then(() => {
    console.log('mongodb server is connected')
})

app.use('/auth', authRoute);
app.use('/projects', projectRoute);

app.all('*', (req, res) => {
    res.status(404).json({status: 'Error', message: 'this resource is not available'});
})

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({status: err.statusText || httpStatusText.ERROR, message: err.message, code: err.statusCode || 500, data: null});
});

app.listen(process.env.PORT || 4000, () => {
    console.log('running now on 4000')
});