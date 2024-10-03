import { Colors } from '@/constants/Colors';
import { messages as messageDatas } from '@/utils/data/messages';
import { Message } from '@/utils/types/messages';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Animated, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';


type MessageItemProps = {
    message: Message;
    isCurrentUser: boolean;
};

const MessageItem = ({ message, isCurrentUser }: MessageItemProps) => {
    const containerStyle = isCurrentUser
        ? [styles.messageContainer, styles.currentUserMessage]
        : styles.messageContainer;

    const textStyle = isCurrentUser
        ? [styles.messageText, styles.currentUserText]
        : styles.messageText;

    return (
        <View style={[containerStyle, isCurrentUser ? styles.alignRight : styles.alignLeft]}>
            {!isCurrentUser && <Text style={[styles.author, isCurrentUser && { color: 'white' }]}>{message.author} {message.online ? '🟢' : '🔴'}</Text>}
            <Text style={textStyle}>{message.content}</Text>
            <Text style={[styles.date, isCurrentUser && { color: 'white' }]}>{message.sent_date.toLocaleString()}</Text>
        </View>
    );
};

export default function ChatScreen() {


    // Reference to the FlatList Component.
    const flatListRef = React.useRef(null);

    const renderItem = ({ item }: { item: Message }) => {
        const isCurrentUser = item.author === 'Moi';
        return <MessageItem message={item} isCurrentUser={isCurrentUser} />;
    };

    const [newMessage, setNewMessage] = React.useState('');
    const [messages, setMessages] = React.useState<Message[]>(messageDatas);
    const fadeAnim = new Animated.Value(0);

    const sendMessage = () => {
        if (newMessage.trim() === '') return;

        const message = {
            author: 'Moi',
            content: newMessage,
            sent_date: new Date(),
            online: true,
        };

        setMessages([...messages, message]);
        setNewMessage('');

        // Scrolling to the end after sending the message
        setTimeout(() => {
            // @ts-ignore
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 100);  // Small delay to ensure the message is rendered before scrolling
    };


    React.useEffect(() => {
        // Animation d'apparition du champ d'entrée
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <FlatList
                ref={flatListRef}
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.messagesList}
            />
            <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Écrire un message..."
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholderTextColor="#777777"
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Ionicons name="send" size={24} color="white" />
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    messagesList: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        padding: 10,
    },
    messageContainer: {
        maxWidth: '75%',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    currentUserMessage: {
        backgroundColor: '#32da44',
    },
    messageText: {
        fontSize: 16,
    },
    currentUserText: {
        color: '#ffffff',
    },
    author: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    date: {
        fontSize: 12,
        color: '#999999',
        marginTop: 5,
    },
    alignLeft: {
        alignSelf: 'flex-start',
        backgroundColor: '#eeeeee',
    },
    alignRight: {
        alignSelf: 'flex-end',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        padding: 10,
        width: '100%'
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#777777',
        paddingHorizontal: 10,
    },
    sendButton: {
        backgroundColor: '#32da44',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
