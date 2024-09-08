// src/routes/commentRoutes.ts
import { Router } from 'express';
import { getAllComments, createComment } from '../controllers/comment_controller';

const router = Router();

router.get('/', getAllComments);
router.post('/create', createComment);

export default router;
