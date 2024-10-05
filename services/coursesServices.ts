import { courses } from "@/utils/data/courses";
import { throwError } from "@/utils/error_function";
import { Course, Subject } from "@/utils/interface/global";
import { ToastAndroid } from "react-native";

export function getCoursesBySubject(subject: Subject) {
    const filteredCourses = courses.filter(course => course.subject === subject);

    if (filteredCourses.length) {
        return filteredCourses;
    } else {
        throwError(`Course ${subject} is not available`, 'ERROR')
    }
}


export function getCoursesByTeacherId(teacherId: string): Course[] {
    return courses.filter(course => course.teacherId === teacherId);
}


export function getCourseById(courseId: string): Course | undefined {

    const uniqueCourse = courses.find(course => course.id === courseId);

    if (uniqueCourse) {
        return uniqueCourse;
    } else {
        throwError(`Course ${courseId} is not available`, 'ERROR')
    }
}


export function addCourse(course: Course, subject: Subject) {
    const subjectCourses = getCoursesBySubject(subject);
    const existingCourse = subjectCourses?.find(c => c.title.includes(course.title));

    if (course && !existingCourse) {
        courses.push(course);
        ToastAndroid.show("Course created successfully !", ToastAndroid.LONG);
    } else if (existingCourse) {
        throwError("Course already exists ! Try with another name", 'ERROR');
    } else {
        throwError("Error occured ! Please try again !", 'ERROR');
    }
}


export function updateCourse(subject: Subject, courseId: string, updatedInfo: Partial<Course>): Course | undefined {
    const course = getCourseById(courseId);

    if (course) {
        Object.assign(course, updatedInfo); // Mise à jour des informations
        ToastAndroid.show("Course updated successfully !", ToastAndroid.LONG);
        return course;
    }

    throwError("Course not found !", 'ERROR');
}
