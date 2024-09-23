import { User } from "@/utils/interface/user";
import axios from "axios";
import { Alert, ToastAndroid } from "react-native";


const BASE_USER_ENDPOINT = 'http://10.0.2.2:4100/users';
const ERROR_MESSAGE = {
    message: "Something went wrong ! Please try again later..."
};

export async function getAllUsers() {

    await axios.get(BASE_USER_ENDPOINT)
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch((error) => {
            if (error) {
                Alert.alert(`${JSON.stringify(ERROR_MESSAGE)}`)
            }
        });

}

export async function getOneUser(userId: string) {

    const URL = `${BASE_USER_ENDPOINT}/${userId}`;

    await axios.get(URL)
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch((error) => {
            if (error) {
                Alert.alert(`${JSON.stringify(ERROR_MESSAGE)}`)
            }
        });
}


export async function createNewUser(userData: User): Promise<User> {
    console.log({ userData });
    const URL = `${BASE_USER_ENDPOINT}/create`;

    return await axios.post(URL, userData)
        .then(response => response.data)
        .catch(error => {
            ToastAndroid.show(error.message, ToastAndroid.LONG);
            console.log(error);
        });
}
