import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Tag from '../tag';
import { router } from 'expo-router';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';  // Import animations

const width = Dimensions.get('window').width;

type CourseCardProps = {
    title: string;
    communityMemberCount: number;
    description: string;
    author: string;
    resourcesCount: number;
};

export default function CourseCard({
    title,
    communityMemberCount,
    description,
    author,
    resourcesCount,
}: CourseCardProps) {
    return (
        <Animated.View
            sharedTransitionTag='courseImage'
            style={styles.container}
            entering={FadeIn.duration(500)}  // Fade-in animation when card appears
            exiting={FadeOut.duration(300)}  // Optional fade-out animation when card disappears
        >
            <View style={styles.tag}>
                <Tag />
            </View>

            <TouchableOpacity onPress={() => router.push('/(details)/course_detail')} activeOpacity={.6} style={{ height: '50%' }}>
                <Image style={styles.image} source={require('@/assets/images/app/cb1.png')} />
            </TouchableOpacity>

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text>Description: {description.slice(0, 40)}</Text>
                {/* <Text>Community members: {communityMemberCount}</Text> */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text>Author: {author}</Text>
                    <Text>Resources: {resourcesCount}</Text>
                </View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 400,
        maxWidth: 420,
        width: width - 140,
        marginHorizontal: 10,
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
        padding: 20,
        gap: 6
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 5,
    },
    tag: {
        position: 'absolute',
        top: 16,
        left: 14,
        zIndex: 100,
    },
});
