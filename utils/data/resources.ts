import { Resource, ResourceType } from "../interface/global";

export const resources: Resource[] = [
    {
        "id": "resource1",
        "title": "Livre: Introduction au Génie Logiciel",
        "description": "Un livre essentiel pour comprendre les concepts de base.",
        "type": ResourceType.PDF,
        "fileUrl": "https://example.com/book1.pdf",
        "courseId": "course1",
        "teacherId": "teacher1",
        "createdAt": new Date("2024-01-01T12:00:00Z")
    },
    {
        "id": "resource2",
        "title": "Vidéo: Développement d'Applications",
        "description": "Une vidéo tutoriel sur le développement d'applications.",
        "type": ResourceType.VIDEO,
        "fileUrl": "https://example.com/video1.mp4",
        "courseId": "course2",
        "teacherId": "teacher1",
        "createdAt": new Date("2024-01-01T12:00:00Z")
    },
    {
        "id": "resource3",
        "title": "Exercice: Bases de Données",
        "description": "Un exercice pratique sur les bases de données.",
        "type": ResourceType.DOCUMENT,
        "fileUrl": "https://example.com/exercise1.docx",
        "courseId": "course3",
        "teacherId": "teacher2",
        "createdAt": new Date("2024-01-01T12:00:00Z")
    }
];