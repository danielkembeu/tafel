import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function AppSearchBar() {
    return (
        <View style={styles.searchBarContainer}>
            <Ionicons name='search' size={26} color='#444' />
            <TextInput
                style={styles.searchInput}
                placeholder='Search for a course...'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        width: '100%',
        flexDirection: 'row',
        gap: 20,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#ddd',
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 10
    },
    searchInput: {
        width: '100%'
    }
});