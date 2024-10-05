import { messages } from "@/utils/data/messages";
import { throwError } from "@/utils/error_function";
import { Message } from "@/utils/interface/global";
import { ToastAndroid } from "react-native";

export function getMessagesByRoomId(roomId: string): Message[] {
    return messages.filter(message => message.roomId === roomId);
}


export function getMessageById(messageId: string): Message | undefined { // Remplacer par la salle désirée

    const message = messages.find(message => message.id === messageId);
    
    if (message) {
        return message;
    } else {
        throwError("Message not found!", 'ERROR');
    }
}


export function addMessageToRoom(roomId: string, content: string, senderId: string) {
    try {
        const newMessage: Message = {
            id: `msg-${Date.now()}`,
            content,
            createdAt: new Date(),
            senderId,
            roomId,
            online: window.navigator.onLine
        };
        // Logique pour ajouter le message
        messages.push(newMessage);
        ToastAndroid.show("Message successfully deleted !", ToastAndroid.LONG);

    } catch (error: any) {
        throwError(error.message, 'ERROR');
    }

}


export function deleteMessage(roomId: string, messageId: string): boolean {
    const messages: Message[] = getMessagesByRoomId(roomId); // Remplacer par la salle désirée
    const messageIndex = messages.findIndex(message => message.id === messageId);

    if (messageIndex > -1) {
        messages.splice(messageIndex, 1); // Suppression du message

        ToastAndroid.show("Message successfully deleted !", ToastAndroid.LONG)
        return true;
    }

    throwError('Message not found', 'ERROR');
    return false;
}
