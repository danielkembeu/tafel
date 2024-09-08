// src/routes/userRoutes.ts
import { Router } from 'express';
import { getAllUsers, getUserById, createUser } from '../controllers/user_controller';

const router = Router();

router.get('/', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/create', createUser);

export default router;
