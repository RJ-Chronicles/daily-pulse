import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  res.status(200).send({ message: 'Feed route is working!' });
});

export default router;
