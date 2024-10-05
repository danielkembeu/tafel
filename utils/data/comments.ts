import { Comment } from "../interface/global";

export const comments: Comment[] = [
    {
        "id": "comment1",
        "content": "Ce cours est très intéressant!",
        "userId": "user1",
        "createdAt": new Date("2024-01-02T12:00:00Z"),
        "courseId": "course1"
    },
    {
        "id": "comment2",
        "content": "J'ai appris beaucoup dans ce cours!",
        "userId": "user2",
        "createdAt": new Date("2024-01-02T12:00:00Z"),
        "courseId": "course2"
    }
]