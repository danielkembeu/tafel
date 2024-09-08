export interface User {
    id?: string;
    name: string;
    email: string;
    role: "STUDENT" | "TEACHER";
    createdAt?: Date;
    updatedAt?: Date;
}