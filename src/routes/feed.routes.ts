import { Router } from 'express';

import { POST } from '../controllers/feed.controller';

const router = Router();

router.post('/feed', POST);

export default router;
