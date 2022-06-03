import { Request, Response } from 'express';
import express from 'express';
import 'dotenv/config';
import 'reflect-metadata';
import "@shared/container";
import createConnection  from '@shared/infra/typeorm';

import { router } from './routes';
import { ensureAuthenticate } from './middlewares/ensureAuthenticated';

createConnection();

const app = express()
app.use(express.json());
app.use(router);

app.get("/teste", ensureAuthenticate, (request: Request, response: Response) => {
    console.log("Teste")
    return response.status(200).send();
})

export { app };