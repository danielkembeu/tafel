import { getUserById } from "@/services/userServices";

export const getTeacherName = (teacherId: string) => {
    const teacher = getUserById(teacherId);
    return teacher && teacher.name;
}