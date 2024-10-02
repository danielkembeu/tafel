// src/controllers/resourceController.ts
import { Request, Response } from 'express';
import prisma from '../src/db';


export const getAllResources = async (req: Request, res: Response) => {
    try {
        const resources = await prisma.resource.findMany();
        res.json(resources);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
};


export const createResource = async (req: Request, res: Response) => {
    const { title, description, type, fileUrl, teacherId, courseId } = req.body;
    try {
        const resource = await prisma.resource.create({
            data: {
                title,
                description,
                type,
                fileUrl,
                teacher: { connect: { id: teacherId } },
                course: { connect: { id: courseId } },
            },
        });
        res.status(201).json(resource);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create resource' });
    }
};
