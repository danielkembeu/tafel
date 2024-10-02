// src/routes/userRoutes.ts
import { Router } from 'express';
import {
    getAllUsers,
    getUserById,
    createAdmin,
    createStudent,
    createTeacher,
    getAllAdmins,
    getAllStudents,
    getAllTeachers, getUserByRole
} from '../controllers/user_controller';

const router = Router();

router.get('/', getAllUsers);

router.get('/admin', getAllAdmins);
router.get('/students', getAllStudents);
router.get('/teachers', getAllTeachers);

router.get('/user/:id', getUserById);
router.get('/user/:role/:id', getUserByRole);

router.post('/admin/create', createAdmin);
router.post('/student/create', createStudent);
router.post('/teacher/create', createTeacher);

export default router;
