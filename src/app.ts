import env from 'dotenv';
import express from 'express';

import applyMiddlewares from './middlewares/default';
import ErrorHandler from './middlewares/error-handler';
import { health_router } from './routes';

env.config();

const app = express();

applyMiddlewares(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', health_router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(ErrorHandler);

console.log('Hello from Daily Pulse!');
