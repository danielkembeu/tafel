import { rooms } from "@/utils/data/rooms";
import { throwError } from "@/utils/error_function";
import { Room } from "@/utils/interface/global";
import { ToastAndroid } from "react-native";

export function getAllRooms(): Room[] {
    return rooms; // Remplacer par le tableau des salles
}


export function getRoomById(id: string): Room | undefined {
    const rooms: Room[] = getAllRooms();

    if (rooms.length) {
        return rooms.find(room => room.id === id);
    } else {
        throwError("No rooms found", 'ERROR');
    }
}


export function addRoom(room: Room) {

    // If there's a room with the same name already or a part of the name.
    const existingRoom = rooms.find(r => r.name.includes(room.name));

    if (room && !existingRoom) {
        rooms.push(room);
        ToastAndroid.show("Room created successfully !", ToastAndroid.LONG);
    } else if (existingRoom) {
        throwError("Room already exists !", 'ERROR');
    } else {
        throwError("An Error occured ! Please try again !", 'ERROR');
    }

}


export function updateRoom(id: string, roomNewInfos: Partial<Room>): Room | undefined {
    const room = getRoomById(id);

    if (room) {
        Object.assign(room, roomNewInfos); // Mise à jour des informations
        return room;
    }

    throwError("Could not find room !", 'ERROR');
}
