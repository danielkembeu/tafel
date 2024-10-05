import { resources } from "@/utils/data/resources";
import { throwError } from "@/utils/error_function";
import { Resource } from "@/utils/interface/global";
import { Subject } from "@/utils/interface/global";
import { ToastAndroid } from "react-native";
import { getCourseById } from "./coursesServices";



export function getAllResources() {
    return resources;
}


export function getResourcesByCourse(courseId: string): Resource[] {
    const courseResources = resources.filter(resource => resource.courseId === courseId);

    if (courseResources.length) {
        return courseResources;
    } else {
        throwError("No resources found for this course!", "ALERT");
        return [];
    }
}


export function getResourceById(id: string, courseId: string): Resource | undefined {
    const resources: Resource[] = getResourcesByCourse(courseId); // Remplacer par le cours désiré
    const resource = resources.find(resource => resource.id === id);

    if (resource) {
        return resource;
    } else {
        throwError("Resource not found !", 'ERROR');
    }
}


export function addResource(courseId: string, resource: Resource) {

    const courses = getCourseById(courseId);

    if (resource) {
        resources.push({ ...resource, courseId: courseId });
        ToastAndroid.show("Course created successfully !", ToastAndroid.LONG);
    } else {
        throwError("Error occured ! Please try again !", 'ERROR');
    }
}


export function deleteResource(resourceId: string) {
    const resource = getAllResources().find(r => r.id === resourceId);

    if (resource) {
        ToastAndroid.show("Resource deleted !", ToastAndroid.LONG);
    }

    throwError("Resource not found !", "ERROR");
}
