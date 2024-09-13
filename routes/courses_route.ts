// src/routes/courseRoutes.ts
import { Router } from 'express';
import { getAllCourses, createCourse } from '../controllers/courses_controller';

const router = Router();

router.get('/', getAllCourses);
router.post('/create', createCourse);

export default router;
