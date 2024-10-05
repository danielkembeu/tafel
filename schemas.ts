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
    role: z.enum(['STUDENT', 'TEACHER', 'ADMIN']),
    filiere: z.string().min(1, {
        message: "Field required"
    }),
    password: z.string().min(6, {
        message: "Password should be at least 6 characters"
    })
});


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Invalid email address !"
    }).min(1, {
        message: 'Email is required !'
    }),
    password: z.string().min(6, {
        message: "Your password is less than 8 characters"
    })
})