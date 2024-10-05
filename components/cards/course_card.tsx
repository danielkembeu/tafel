import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Tag from '../tag';
import { router } from 'expo-router';
import Animated, { FadeIn, FadeInRight, FadeInUp, FadeOut } from 'react-native-reanimated';  // Import animations
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

type CourseCardProps = {
    title: string;
    communityMemberCount: number;
    description: string;
    author: string;
    resourcesCount: number;
    id: string;
    type?: 'CARD' | 'DEFAULT' | 'FULL';
};

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



export default function CourseCard({
    id,
    title,
    type = 'DEFAULT',
    description,
    author,
    resourcesCount,
}: CourseCardProps) {

    const RenderItem = () => {
        switch (type) {
            case 'CARD':
                return (
                    <Animated.View
                        style={{
                            maxHeight: SCREEN_HEIGHT * .3,
                            width: SCREEN_WIDTH * .45,
                            backgroundColor: '#fff',
                            marginHorizontal: 20,
                            borderRadius: 10,
                            overflow: 'hidden',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 5 },
                            shadowOpacity: 0.3,
                            shadowRadius: 5,
                            elevation: 6,
                        }}
                        entering={FadeInUp.duration(500)}  // Fade-in animation when card appears
                        exiting={FadeOut.duration(300)}  // Optional fade-out animation when card disappears
                    >
                        <View style={styles.tag}>
                            <Tag />
                        </View>

                        <TouchableOpacity
                            onPress={() => router.push({
                                pathname: "/(details)/[courseId]",
                                params: { courseId: id }
                            })}
                            activeOpacity={.6} style={{ height: '50%' }}>
                            <Image style={styles.image} source={require('@/assets/images/app/cb1.png')} />
                        </TouchableOpacity>

                        <View style={styles.infoContainer}>
                            <Text style={[styles.title, { fontSize: 16 }]}>{title}</Text>
                            {/* <Text>Description: {description}</Text> */}
                            {/* <Text>Community members: {communityMemberCount}</Text> */}
                            <View style={{
                                // flexDirection: 'row',
                                // justifyContent: 'space-between',
                                // alignItems: 'center',
                                // marginTop: 10
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <Ionicons name='person-circle' size={18} color={Colors.primary} />
                                    <Text style={{ fontWeight: 'bold' }}>{author}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <Ionicons name='document' size={18} color={Colors.primary} />
                                    <Text style={{ fontWeight: 'bold' }}>{resourcesCount}</Text>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                );

            case 'FULL':
                return (
                    <Animated.View
                        style={{
                            maxHeight: SCREEN_HEIGHT * .4,
                            backgroundColor: '#fff',
                            marginHorizontal: 20,
                            borderRadius: 16,
                            overflow: 'hidden',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 5 },
                            shadowOpacity: 0.3,
                            shadowRadius: 5,
                            elevation: 6,
                        }}
                        entering={FadeIn.duration(500)}  // Fade-in animation when card appears
                        exiting={FadeOut.duration(300)}  // Optional fade-out animation when card disappears
                    >
                        <View style={styles.tag}>
                            <Tag />
                        </View>

                        <TouchableOpacity
                            onPress={() => router.push({
                                pathname: "/(details)/[courseId]",
                                params: { courseId: id }
                            })}
                            activeOpacity={.6} style={{ height: '55%' }}>
                            <Image style={styles.image} source={require('@/assets/images/app/cb1.png')} />
                        </TouchableOpacity>

                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text>Description: {description}</Text>
                            {/* <Text>Community members: {communityMemberCount}</Text> */}
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 10
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <Ionicons name='person-circle' size={18} color={Colors.primary} />
                                    <Text style={{ fontWeight: 'bold' }}>{author}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <Ionicons name='document' size={18} color={Colors.primary} />
                                    <Text style={{ fontWeight: 'bold' }}>{resourcesCount}</Text>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                )

            case 'DEFAULT':
                return (
                    <Animated.View
                        style={styles.container}
                        entering={FadeIn.duration(500)}  // Fade-in animation when card appears
                        exiting={FadeOut.duration(300)}  // Optional fade-out animation when card disappears
                    >
                        <View style={styles.tag}>
                            <Tag />
                        </View>

                        <TouchableOpacity
                            onPress={() => router.push({
                                pathname: "/(details)/[courseId]",
                                params: { courseId: id }
                            })}
                            activeOpacity={.6} style={{ height: '50%' }}>
                            <Image style={styles.image} source={require('@/assets/images/app/cb1.png')} />
                        </TouchableOpacity>

                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text>Description: {description}</Text>
                            {/* <Text>Community members: {communityMemberCount}</Text> */}
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 10
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <Ionicons name='person-circle' size={18} color={Colors.primary} />
                                    <Text style={{ fontWeight: 'bold' }}>{author}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <Ionicons name='document' size={18} color={Colors.primary} />
                                    <Text style={{ fontWeight: 'bold' }}>{resourcesCount}</Text>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                );

            default:
                break;
        }
    }


    return (
        <View style={{ width: '100%' }}>
            <RenderItem />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 400,
        maxWidth: 420,
        width: width - 140,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    infoContainer: {
        padding: 16,
        gap: 6
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 5,
        color: Colors.primary
    },
    tag: {
        position: 'absolute',
        top: 16,
        left: 14,
        zIndex: 100,
    },
});
