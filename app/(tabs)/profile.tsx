import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

const ProfileScreen = () => {
    // Exemple de données utilisateur
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Student',
    };

    // Générer les initiales à partir du nom de l'utilisateur
    const generateInitials = (name: string) => {
        const initials = name.split(' ').map((n) => n[0]).join('');
        return initials;
    };

    const handleLogout = () => {
        Alert.alert("Déconnexion", "Voulez-vous vraiment vous déconnecter ?", [
            {
                text: "Oui",
                onPress: () => router.replace("/(auth)/login")
            },
            {
                text: 'Annuler'
            }
        ])
    };

    return (
        <View style={styles.container}>
            {/* Bannière en haut */}
            <ImageBackground
                source={{ uri: 'https://via.placeholder.com/500x200' }} // Image de bannière factice
                style={styles.banner}
            >
                <Avatar.Text
                    size={80}
                    label={generateInitials(user.name)}
                    style={styles.avatar}
                    color="white"
                />
            </ImageBackground>

            {/* Informations utilisateur */}
            <Card style={styles.infoCard}>
                <Card.Content>
                    <Text style={styles.nameText}>{user.name}</Text>
                    <Text style={styles.emailText}>{user.email}</Text>
                    <Text style={styles.roleText}>Rôle : {user.role}</Text>
                </Card.Content>
            </Card>

            {/* Bouton de déconnexion */}
            <Button mode="contained" onPress={handleLogout} style={styles.logoutButton}>
                Déconnexion
            </Button>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 40,
    },
    banner: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: '#6200ea', // Couleur personnalisée pour l'avatar
    },
    infoCard: {
        margin: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
    },
    nameText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    emailText: {
        fontSize: 16,
        marginTop: 5,
        color: '#888',
    },
    roleText: {
        fontSize: 16,
        marginTop: 10,
        color: '#555',
    },
    logoutButton: {
        margin: 20,
        padding: 10,
        backgroundColor: '#d32f2f',
    },
});
