import { Request, Response } from 'express';
import express from 'express';
import 'dotenv/config';
import 'reflect-metadata';
import "@shared/container";
import createConnection  from '@shared/infra/typeorm';
import cors from "cors";

import { router } from './routes';
import { ensureAuthenticate } from './middlewares/ensureAuthenticated';

createConnection();

const app = express()
app.use(cors())
app.use(express.json());
app.use(router);

export { app };