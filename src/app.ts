import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error';
import routers from './routes';

const app = express();

app.use(express.json());

app.use(routers);

app.use(errorMiddleware);

export default app;
