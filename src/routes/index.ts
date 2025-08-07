import { Router } from 'express';

const router = Router();
import feedRoute from './feed.routes';
import healthRouter from './health.route';

router.use('/check', healthRouter);
router.use('/feed', feedRoute);

export default router;
