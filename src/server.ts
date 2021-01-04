// REQ / RES
import express, { Application } from 'express';
import cors from 'cors';

import 'express-async-errors';

//import { routes } from './routes';
import routes from './routes';
import errorHandler from './errors/handler';

// Boot express
export const app: Application = express();

app.use(cors());
app.use(express.json());

app.use(errorHandler);

// Application routing
//routes(app);
app.use(routes);