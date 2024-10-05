import { Role, Subject } from "./global";

export interface User {
    id?: string;
    name: string;
    email: string;
    role: Role;
    age?: number;
    subject?: Subject;
    createdAt?: Date;
    updatedAt?: Date;
}