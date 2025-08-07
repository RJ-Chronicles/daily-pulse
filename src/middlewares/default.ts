import cors from 'cors';
import { Application } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const applyMiddlewares = (app: Application) => {
  app.use(helmet());
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  app.use(cors());
};

export default applyMiddlewares;
