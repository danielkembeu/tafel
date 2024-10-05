import { users } from "@/utils/data/users";
import { User } from "@/utils/interface/global";
import { ToastAndroid } from "react-native";
import { throwError } from '@/utils/error_function';


export function getAllUsers(): User[] {
    return users;
}

export function getUserById(userId: string): User | undefined {
    const match = users.find(user => user.id === userId);
    if (match) {
        return match;
    } else {
        throwError("User not found!", 'ERROR');
    }
}


export function createNewUser(userData: User) {
    const existingUser = users.find(user => user.email === userData.email);

    if (userData && !existingUser) {
        users.push(userData);
        ToastAndroid.show("User created successfully !", ToastAndroid.LONG);
        console.log('newUser:', userData);
    } else if (existingUser) {
        throwError("User already exists !", 'ERROR');
    } else {
        throwError("Wrong credentials ! Please try again !", 'ERROR');
    }
}


export function updateUser(userId: string, data: Partial<User>): User | undefined {
    const match = getUserById(userId);

    if (match) {
        Object.assign(match, data);
        ToastAndroid.show("User updated successfully!", ToastAndroid.LONG);
        return match;
    } else {
        throwError("User not found!", 'ERROR');
    }
}


export function deleteUser(userId: string) {
    const match = getUserById(userId);

    if (match) {
        users.splice(users.indexOf(match), 1);
        ToastAndroid.show("User deleted successfully!", ToastAndroid.LONG);
    } else {
        throwError("User not found!", 'ALERT');
    }
}

