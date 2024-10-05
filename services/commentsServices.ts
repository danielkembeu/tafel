import { comments } from "@/utils/data/comments";
import { Comment } from "@/utils/interface/global";
import { getCourseById } from "./coursesServices";
import { throwError } from "@/utils/error_function";
import { ToastAndroid } from "react-native";

export function getAllComments() {
    return comments;
}

export function getCommentsByCourse(courseId: string) {
    return comments.filter(comment => comment.courseId === courseId);
}


export function getCommentById(courseId: string, id: string): Comment | undefined {
    const comments: Comment[] = getCommentsByCourse(courseId); // Remplacer par le cours désiré
    return comments.find(comment => comment.id === id);
}


export function addComment(comment: Comment, courseId: string): Comment | undefined {
    const course = getCourseById(courseId);

    if (course) {
        comments.push({ ...comment, courseId: course.id });
        ToastAndroid.show("Comment added !", ToastAndroid.LONG);
        return comment; // Remplacer par la logique d'ajout

    } else {
        throwError("Course not found !", 'ERROR');
        return undefined;
    }

}


export function deleteComment(id: string): boolean {
    const comments: Comment[] = getAllComments(); // Remplacer par le cours désiré
    const commentIndex = comments.findIndex(comment => comment.id === id);

    if (commentIndex > -1) {
        comments.splice(commentIndex, 1); // Suppression du commentaire
        return true;
    }
    
    return false;
}
