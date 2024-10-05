import { Alert, ToastAndroid } from "react-native";

/**
 * 
 * @param message String
 * @param type 'ALERT' or 'ERROR'
 * 
 * A utility function that returns nice error messages.
 */
export function throwError(message: string, type: 'ALERT' | 'ERROR') {
    if (type === 'ALERT') {
        Alert.alert("Error", message);
    } else {
        ToastAndroid.show(message, ToastAndroid.LONG);
    }
}
