// src/controllers/userController.ts
import { Request, Response } from 'express';
import prisma from '../src/db';
import { Role, Subject } from '@prisma/client';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};


export const getAllAdmins = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({ where: { role: 'ADMIN' } });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch admins' });
    }
};


export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({ where: { role: 'STUDENT' } });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch students' });
    }
};


export const getAllTeachers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({ where: { role: 'TEACHER' } });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch teachers' });
    }
};



export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({ where: { id: id } });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};


export const getUserByRole = async (req: Request, res: Response) => {

    const { role } = req.params;
    const { id } = req.params;

    let contextUser;
    const formattedRole = role as Role;

    try {
        switch (formattedRole) {
            case 'ADMIN': {
                contextUser = await prisma.user.findUnique({ where: { id: id, role: formattedRole } });
                break;
            }
            case 'TEACHER': {
                contextUser = await prisma.user.findUnique({ where: { id: id, role: formattedRole } });
                break;
            }
            case 'STUDENT': {
                contextUser = await prisma.user.findUnique({ where: { id: id, role: formattedRole } });
                break;
            }
            default:
                res.json({ error: 'Invalid role name' });
        }

        if (contextUser) {
            res.json(contextUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};




export const createAdmin = async (req: Request, res: Response) => {

    const { email, name } = req.body;

    let contextUser;

    try {
        const admin = await prisma.admin.create({
            data: {
                email,
                name,
            }
        });

        contextUser = await prisma.user.create({
            data: {
                role: 'ADMIN',
                admin: {
                    connect: { id: admin.id }
                }
            }
        });

        res.status(201).json(contextUser);

    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};


export const createStudent = async (req: Request, res: Response) => {
    const { email, name, age, subject } = req.body;

    try {
        // Step 1: Create the user first
        const newUser = await prisma.user.create({
            data: {
                role: 'STUDENT'
            }
        });

        // Step 2: Create the student and associate it with the newly created user
        const student = await prisma.student.create({
            data: {
                email,
                name,
                subject: subject as Subject, // Ensure type safety
                age,
                userId: newUser.id  // Link the student to the user
            }
        });

        // Step 3: Respond with a success message
        res.status(201).json({
            message: 'Student and user created successfully',
            student,
            user: newUser
        });

    } catch (err: any) {
        // Step 4: Handle errors
        console.error('Error creating student:', err);

        res.status(500).json({
            error: 'Failed to create student',
            details: err.message || 'Unknown error'
        });
    }
};




export const createTeacher = async (req: Request, res: Response) => {

    const { email, name, subject } = req.body;
    const formattedSubject = subject as Subject;

    try {
        const teacher = await prisma.teacher.create({
            data: {
                name,
                email,
                subject: formattedSubject
            }
        });

        const newUser = await prisma.user.create({
            data: {
                role: 'TEACHER',
                teacher: {
                    connect: { id: teacher.id }
                }
            }
        });

        console.log(newUser);
        res.status(201).json(newUser);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create teacher' });
    }
}

