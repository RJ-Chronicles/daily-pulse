import cors from 'cors';
import { Application } from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const applyMiddlewares = (app: Application) => {
  app.use(helmet());
  app.use(mongoSanitize());
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  app.use(cors());
};

export default applyMiddlewares;
