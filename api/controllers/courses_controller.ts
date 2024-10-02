// src/controllers/courseController.ts
import { Request, Response } from 'express';
import prisma from '../src/db';

export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await prisma.course.findMany();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};

export const createCourse = async (req: Request, res: Response) => {
    const { title, description, teacherId } = req.body;
    try {
        const course = await prisma.course.create({
            data: { title, description, teacher: { connect: { id: teacherId } } },
        });
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create course' });
    }
};
