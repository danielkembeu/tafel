import { Alert, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import ResourceCard from '@/components/resource_card'
import { Course, Resource } from '@/utils/interface/global'
import { courses } from '@/utils/data/courses'
import { resources } from '@/utils/data/resources'
import { throwError } from '@/utils/error_function'
import { ActivityIndicator } from 'react-native-paper'
import { getResourcesByCourse } from '@/services/resourcesServices'


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


export default function CourseDetail() {

    const { courseId } = useLocalSearchParams();

    const [itemIndex, setItemIndex] = React.useState(0);
    const [selected, setSelected] = React.useState(false);
    const [course, setCourse] = React.useState<Course | null>();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [contextResource, setContextResource] = React.useState<Resource[] | null>(null);
    const [pressed, setPressed] = React.useState<boolean>(false);
    const [categories, setCategories] = React.useState<string[]>(['All', 'Documents', 'Liens', 'Videos']);


    React.useEffect(() => {
        try {
            setLoading(true);
            const course = courses.find(c => c.id === courseId);

            if (course) {
                setTimeout(() => {
                    setCourse(course)
                    setLoading(false);
                }, 500);
            }
        } catch (error) {
            throwError("No course found !", 'ALERT');
            setLoading(false);
        }

        if (courseId) {
            const contextResource = getResourcesByCourse(courseId as string);

            if (contextResource.length > 0) {
                setContextResource(contextResource);
            } else {
                throwError('No resources available for this course', 'ALERT');
            }
        }
    }, [courseId]);



    const filterCourse = (index: number) => {
        setItemIndex(index);
        setSelected(index === itemIndex);
    }


    return (
        <ScrollView>
            <Stack.Screen options={{
                title: course ? course.title : 'Loading Course...',
                headerTitleStyle: { fontWeight: 'bold', color: Colors.primary },
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerStyle: { backgroundColor: "#f4f4f4" },
                headerRight: () => (
                    <TouchableOpacity onPress={() => {
                        setPressed(!pressed);
                        if (pressed) {
                            ToastAndroid.showWithGravity("Course saved successfully !",
                                ToastAndroid.LONG, ToastAndroid.TOP
                            );
                        }
                    }}>
                        <Ionicons name={pressed ? 'bookmark-outline' : 'bookmark'} size={26} color={Colors.primary} />
                    </TouchableOpacity>
                )
            }} />

            {
                !loading ? (
                    <View style={styles.container}>
                        <View style={styles.imageSection}>
                            <Image source={require('@/assets/images/app/cb1.png')} resizeMode='cover'
                                style={styles.topImage}
                            />
                        </View>

                        <View style={styles.aboutCourse}>
                            <Text style={styles.title}>{course?.title}</Text>
                            <Text style={styles.details}>10 Lessons • 3 Tests</Text>
                            <Text style={styles.description}>
                                {course?.description}
                            </Text>
                        </View>


                        <View style={{ width: '100%', paddingHorizontal: 20, marginVertical: 20 }}>
                            <View style={{
                                flexDirection: 'row',
                                gap: 40,
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 20
                            }}>
                                {categories.map((label, index) => (
                                    <TouchableOpacity onPress={() => filterCourse(index)} key={index} style={index === itemIndex && {
                                        backgroundColor: Colors.primary,
                                        borderRadius: 8,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={[{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }, index === itemIndex && {
                                            color: 'white',
                                            paddingHorizontal: 20,
                                            paddingVertical: 6,
                                        }]}>{label}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            {/* Resources */}
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={contextResource}
                                renderItem={({ item }) =>
                                    <ResourceCard key={item.id} resource={item} />
                                }
                            />

                        </View>


                    </View>
                ) : (
                    <View style={{
                        height: SCREEN_HEIGHT,
                        flex: 1,
                        marginTop: SCREEN_HEIGHT * .4,
                        gap: 40,
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator
                            animating
                            size={40}
                            color={Colors.primary}
                        />
                        <Text style={{ fontWeight: 'bold' }}>Chargement du cours...</Text>
                    </View>
                )
            }
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageSection: {
        height: 280,
        width: SCREEN_WIDTH,
        marginBottom: 20
    },
    topImage: {
        width: '100%',
        height: '100%',
        marginBottom: 20
    },
    aboutCourse: {
        paddingHorizontal: 20,
        gap: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary
    },
    details: {
        color: '#999',
        fontWeight: 'bold',
    },
    description: {

    },
})