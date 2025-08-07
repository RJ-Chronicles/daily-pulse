import env from 'dotenv';
import express from 'express';

import applyMiddlewares from './middlewares/default';
import routes from './routes/index';
env.config();

const app = express();

applyMiddlewares(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log('Hello from Daily Pulse!');
