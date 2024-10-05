import { Room, Subject } from "../interface/global";

export const rooms: Room[] = [
    {
        "id": "room1",
        "name": "Salle A1",
        "capacity": 50,
        "capacityReached": false,
        "subject": Subject.GENIE_LOGICIEL,
        "createdAt": new Date("2024-01-01T12:00:00Z"),
        "updatedAt": new Date("2024-01-01T12:00:00Z")
    },
    {
        "id": "room2",
        "name": "Salle B2",
        "capacity": 30,
        "capacityReached": false,
        "subject": Subject.BASES_DE_DONNEES,
        "createdAt": new Date("2024-01-01T12:00:00Z"),
        "updatedAt": new Date("2024-01-01T12:00:00Z")
    }

]