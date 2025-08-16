import { Router } from 'express';

import { POST } from '../controllers/feed.controller';
import { validate } from '../validators';

const router = Router();

router.post('/feed', validate('postFeed'), POST);

export default router;
