import { Resource } from "@/utils/interface/resource";
import axios from "axios";


const BASE_RESOURCES_ENDPOINT = 'http://localhost:4100/users';
const ERROR_MESSAGE = {
    message: "Something went wrong ! Please try again later..."
};

export async function getAllResources(): Promise<Resource> {
    const response = await axios.get(BASE_RESOURCES_ENDPOINT);
    const data = await response.data;

    if (data) {
        return Promise.resolve(data);
    } else {
        return Promise.reject(ERROR_MESSAGE);
    }
}


export async function createNewUser(resourceData: Resource): Promise<Resource> {

    const URL = `${BASE_RESOURCES_ENDPOINT}/create`;

    const response = await axios.post(URL, resourceData);
    const data = await response.data;

    if (data) {
        return Promise.resolve(data);
    } else {
        return Promise.reject(ERROR_MESSAGE);
    }
}