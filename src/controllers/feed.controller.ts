import env from 'dotenv';
import { RequestHandler } from 'express';

import { saveUserFeed } from '../services/user.feed';

env.config();

const POST: RequestHandler = async (req, res) => {
  const { description } = req.body as { description: string };

  const content = await saveUserFeed(description);
  return res.status(200).send({ message: 'OK', content });
};

export { POST };
