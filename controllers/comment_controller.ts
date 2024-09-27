// src/controllers/commentController.ts
import { Request, Response } from 'express';
import prisma from '../src/db';

export const getAllComments = async (req: Request, res: Response) => {
    try {
        const comments = await prisma.comment.findMany();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
};

export const createComment = async (req: Request, res: Response) => {
    const { content, courseId, userId } = req.body;
    try {
        const comment = await prisma.comment.create({
            data: {
                content,
                course: { connect: { id: courseId } },
                user: { connect: { id: userId } },
            },
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create comment' });
    }
};
