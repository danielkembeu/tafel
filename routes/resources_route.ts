// src/routes/resourceRoutes.ts
import { Router } from 'express';
import { getAllResources, createResource } from '../controllers/resources_controller';

const router = Router();

router.get('/', getAllResources);
router.post('/create', createResource);

export default router;
