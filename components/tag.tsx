import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


export default function Tag() {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold' }}>Génie Logiciel</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        backgroundColor: '#ddd',
        borderWidth: 2,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 3,
        width: 'auto',
        height: 25,
        fontSize: 12,
        color: 'white',
        marginBottom: 5,
        marginLeft: 5,
    }
})