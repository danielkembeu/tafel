import { Course, Subject } from "../interface/global";

export const courses: Course[] = [
    {
        "id": "course1",
        "title": "Introduction au Génie Logiciel",
        "description": "Un cours d'introduction aux principes du génie logiciel.",
        "createdAt": new Date("2024-01-01T12:00:00Z"),
        "updatedAt": new Date("2024-01-01T12:00:00Z"),
        "teacherId": "teacher1",
        "comments": [],
        "subject": Subject.GENIE_LOGICIEL
    },
    {
        "id": "course2",
        "title": "Développement d'Applications Web",
        "description": "Apprentissage des technologies de développement d'applications web.",
        "createdAt": new Date("2024-01-01T12:00:00Z"),
        "updatedAt": new Date("2024-01-01T12:00:00Z"),
        "teacherId": "teacher1",
        "comments": [],
        "subject": Subject.GENIE_LOGICIEL
    },
    {
        "id": "course3",
        "title": "Bases de Données Avancées",
        "description": "Concepts avancés en bases de données.",
        "createdAt": new Date("2024-01-01T12:00:00Z"),
        "updatedAt": new Date("2024-01-01T12:00:00Z"),
        "teacherId": "teacher2",
        "comments": [],
        "subject": Subject.BASES_DE_DONNEES
    }
];
