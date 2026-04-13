import { Router } from 'express';
import { createIssueController, getIssuesController } from '../controllers/issue.controller.js';
import { requestLogger } from '../middlewares/logger.middleware.js';

const router = Router();

router.post('/hallazgos', requestLogger, createIssueController);
router.get('/hallazgos', requestLogger, getIssuesController);

export default router;
