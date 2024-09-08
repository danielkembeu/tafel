import { User } from "@/utils/interface/user";
import axios from "axios";


const BASE_USER_ENDPOINT = 'http://localhost:4100/users';
const ERROR_MESSAGE = {
    message: "Something went wrong ! Please try again later..."
};

export async function getAllUsers(): Promise<User[]> {
    const response = await axios.get(BASE_USER_ENDPOINT);
    const data = await response.data;

    if (data) {
        return Promise.resolve(data);
    } else {
        return Promise.reject(ERROR_MESSAGE);
    }
}

export async function getOneUser(userId: string): Promise<User> {

    const URL = `${BASE_USER_ENDPOINT}/${userId}`;

    const response = await axios.get(URL);
    const data = await response.data;

    if (data) {
        return Promise.resolve(data);
    } else {
        return Promise.reject(ERROR_MESSAGE);
    }
}


export async function createNewUser(userData: User): Promise<User> {

    const URL = `${BASE_USER_ENDPOINT}/create`;

    const response = await axios.post(URL, userData);
    const data = await response.data;

    if (data) {
        console.log(data);
        return Promise.resolve(data);
    } else {
        return Promise.reject(ERROR_MESSAGE);
    }
}