import { Message } from "../types/messages";

export const messages: Message[] = [
    { author: 'Alice', content: 'Salut tout le monde !', sent_date: new Date('2024-09-01T10:20:00'), online: true },
    { author: 'Bob', content: 'Salut Alice, comment ça va ?', sent_date: new Date('2024-09-01T10:21:00'), online: false },
    { author: 'Charlie', content: 'Je vais bien, merci Bob.', sent_date: new Date('2024-09-01T10:22:00'), online: true },
    { author: 'Moi', content: 'J\'ai une question sur le génie logiciel...', sent_date: new Date('2024-09-01T10:23:00'), online: true },
    { author: 'Alice', content: 'Vas-y, je t\'écoute.', sent_date: new Date('2024-09-01T10:24:00'), online: true },
    { author: 'Moi', content: 'C\'est quoi un Design Pattern ?', sent_date: new Date('2024-09-01T10:25:00'), online: true },
    { author: 'Charlie', content: 'Un Design Pattern est une solution standard à un problème récurrent.', sent_date: new Date('2024-09-01T10:26:00'), online: false },
    { author: 'Bob', content: 'Oui, par exemple le Singleton est très utilisé.', sent_date: new Date('2024-09-01T10:27:00'), online: false },
    { author: 'Moi', content: 'Ah d\'accord, je comprends mieux maintenant.', sent_date: new Date('2024-09-01T10:28:00'), online: true },
    { author: 'Alice', content: 'N\'hésite pas si tu as d\'autres questions !', sent_date: new Date('2024-09-01T10:29:00'), online: true },
    { author: 'Moi', content: 'Merci beaucoup !', sent_date: new Date('2024-09-01T10:30:00'), online: true },
    { author: 'Charlie', content: 'De rien, on est là pour ça.', sent_date: new Date('2024-09-01T10:31:00'), online: true },
    { author: 'Bob', content: 'Bon courage pour la suite !', sent_date: new Date('2024-09-01T10:32:00'), online: false },
];
