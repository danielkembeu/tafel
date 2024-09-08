// src/controllers/userController.ts
import { Request, Response } from 'express';
import prisma from '../src/db';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
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

export const createUser = async (req: Request, res: Response) => {
    const { email, name, role } = req.body;
    try {
        const user = await prisma.user.create({
            data: { email, name, role },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};
