import { Role, Subject, User } from "../interface/global";
import { courses } from "./courses";


export const users: User[] = [
    {
        "id": "student1",
        "role": Role.STUDENT,
        "createdAt": new Date("2024-01-01T12:00:00Z"),
        "updatedAt": new Date("2024-01-01T12:00:00Z"),
        "age": 22,
        "email": "student1@example.com",
        "name": "Alice Dupont",
        "subject": Subject.GENIE_LOGICIEL,
        "password": "password",
    },
    {
        "id": "student2",
        "role": Role.STUDENT,
        "createdAt": new Date("2024-01-01T12:00:00Z"),
        "updatedAt": new Date("2024-01-01T12:00:00Z"),
        "email": "student2@example.com",
        "name": "Bob Martin",
        "age": 21,
        "subject": Subject.GENIE_LOGICIEL,
        "password": "password",
    },
    {
        "id": "teacher1",
        "role": Role.TEACHER,
        "createdAt": new Date("2024-01-01T12:00:00Z"),
        "updatedAt": new Date("2024-01-01T12:00:00Z"),
        "email": "teacher1@example.com",
        "name": "Dr. Jean Durand",
        "subject": Subject.GENIE_LOGICIEL,
        "courses": [courses[0], courses[1]],
        "password": "password",
    },
    {
        "id": "teacher2",
        "role": Role.TEACHER,
        "createdAt": new Date("2024-01-01T12:00:00Z"),
        "updatedAt": new Date("2024-01-01T12:00:00Z"),
        "email": "teacher2@example.com",
        "name": "Prof. Marie Curie",
        "subject": Subject.BASES_DE_DONNEES,
        "courses": [courses[2]],
        "password": "password",
    },
    {
        "id": "admin1",
        "role": Role.ADMIN,
        "createdAt": new Date("2024-01-01T12:00:00Z"),
        "updatedAt": new Date("2024-01-01T12:00:00Z"),
        "email": "admin@example.com",
        "name": "Admin User",
        "password": "password"
    }
];
