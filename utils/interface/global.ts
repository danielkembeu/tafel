export interface User {
    id: string;
    name: string;
    email: string;
    age?: number;
    role: Role;
    password: string;
    subject?: Subject; // Représente la filière de l'utilisateur
    createdAt?: Date;
    updatedAt?: Date;
    courses?: Course[];
    resources?: Resource[];
}


export interface Room {
    id: string;
    name: string;
    capacity?: number;
    capacityReached?: boolean;
    users?: any[]; // Liste des utilisateurs dans la salle
    subject: Subject; // Sujet de la salle
    messages?: Message[]; // Liste des messages dans la salle
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Message {
    id: string;
    content: string;
    createdAt?: Date;
    senderId: string; // Référence à l'utilisateur qui a envoyé le message
    roomId: string; // Référence à la salle où le message a été envoyé,
    online: boolean;
}


export interface Student {
    id: string;
    email: string;
    name: string;
    age: number;
    subject: Subject;
    role: Role;
}


export interface Teacher {
    id: string;
    email: string;
    name: string;
    subject: Subject;
}


export interface Admin {
    id: string;
    email: string;
    name: string;
}


export interface Course {
    id: string;
    title: string;
    bgImage: string;
    description: string;
    subject: Subject;
    resources?: Resource[]; // Un cours peut avoir plusieurs ressources
    createdAt?: Date;
    updatedAt?: Date;
    teacherId: string; // Référence à l'enseignant associé
    comments?: Comment[]; // Les commentaires sur le cours
}


export interface Resource {
    id: string;
    title: string;
    description: string;
    type: ResourceType; // Type de ressource (PDF, Vidéo, Image, etc.)
    fileUrl: string; // Lien vers la ressource
    courseId: string; // Référence au cours associé
    createdAt?: Date;
    teacherId: string; // Référence à l'enseignant associé
}


export interface Comment {
    id: string;
    content: string;
    userId: string; // Référence à l'utilisateur qui a commenté
    createdAt?: Date;
    courseId: string; // Référence au cours associé
}


export enum Role {
    TEACHER,
    STUDENT,
    ADMIN
}


export enum ResourceType {
    PDF,
    VIDEO,
    IMAGE,
    DOCUMENT
}


export enum Subject {
    GENIE_LOGICIEL,
    RESEAUX,
    BASES_DE_DONNEES,
    SYSTEMES_D_INFORMATION,
    INTELLIGENCE_ARTIFICIELLE,
    ALGORITHMES_ET_STRUCTURE_DE_DONNEES,
    ENTREUPRENARIAT
}
