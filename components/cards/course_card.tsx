import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Tag from '../tag';
import { Link, router } from 'expo-router';


const width = Dimensions.get('window').width;

export default function CourseCard() {
    return (
        <View style={styles.container}>
            <View style={styles.tag}>
                <Tag />
            </View>
            {/* @ts-ignore */}
            <TouchableOpacity onPress={() => router.push('/(details)/course_detail')} activeOpacity={.6} style={{ height: '60%' }}>
                <Image style={styles.image} source={require('@/assets/images/app/cb1.png')} />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>
                    Maintenance des Systemes d'informations
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 400,
        maxWidth: 420,
        width: width - 140,
        margin: 10,
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    infoContainer: {
        padding: 10,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    tag: {
        position: 'absolute',
        top: 16,
        left: 14,
        zIndex: 100
    }
});