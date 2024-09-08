import { Comment } from "./comment";

export interface Resource {
    id: string;
    title: string;
    description: string;
    type: 'PDF' | 'VIDEO' | 'IMAGE' | 'DOCUMENT';
    fileUrl: string;
    userId: string;
    courseId: string;
    createAt: Date;
    comments: Comment[]
}