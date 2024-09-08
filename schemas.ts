import * as z from 'zod';

export const RegisterSchema = z.object({
    fullname: z.string().min(2, {
        message: "Invalid name !"
    }),
    email: z.string().email({
        message: "Invalid email address !"
    }).min(1, {
        message: 'Email is required !'
    }),
    role: z.enum(['STUDENT', 'TEACHER'])
});


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Invalid email address !"
    }).min(1, {
        message: 'Email is required !'
    }),
})