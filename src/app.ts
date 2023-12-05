import express from 'express';
import cors from 'cors';
import path from 'path';

import 'dotenv/config';

import { apiRouter } from './routes';

import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(cors());
  
app.use(express.json());

app.use(errorHandler);

app.use('/api', apiRouter);

app.use('/', express.static(path.join(__dirname, 'public')));

export default app;