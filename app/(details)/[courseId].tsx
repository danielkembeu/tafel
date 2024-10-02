import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import ResourceCard from '@/components/resource_card'

export default function course_detail() {

    const [itemIndex, setItemIndex] = React.useState(0);
    const [selected, setSelected] = React.useState(false);


    return (
        <ScrollView>
            <Stack.Screen options={{
                title: 'Course Details',
                headerTitleStyle: { fontWeight: 'bold', color: Colors.primary },
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerRight: () => (
                    <TouchableOpacity>
                        <Ionicons name='bookmark-outline' size={26} color={Colors.primary} />
                    </TouchableOpacity>
                )
            }} />

            <View style={styles.container}>
                <View style={styles.imageSection}>
                    <Image source={require('@/assets/images/app/cb1.png')} resizeMode='contain'
                        style={styles.topImage}
                    />
                </View>

                <View style={styles.aboutCourse}>
                    <Text style={styles.title}>Les arbres en Algorithmique</Text>
                    <Text style={styles.details}>10 Lessons • 3 Tests</Text>
                    <Text style={styles.description}>
                        Les arbres sont des structures de données utilisées pour représenter des arbres ou
                        des arborescences. Ils sont utilisés dans de nombreuses applications, notamment dans
                        le traitement de données, la construction des algorithmes, et la résolution de problèmes
                        complexes.
                    </Text>
                </View>


                <View style={{ width: '100%', paddingHorizontal: 20, marginVertical: 20 }}>
                    <View style={{
                        flexDirection: 'row',
                        gap: 40,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {['Documents', 'Liens', 'Videos'].map((label, index) => (
                            <TouchableOpacity onPress={() => {
                                setItemIndex(index);
                                setSelected(index === itemIndex)
                            }} key={index} style={index === itemIndex && {
                                borderBottomWidth: 2,
                                borderBottomColor: Colors.primary
                            }}>
                                <Text style={[{
                                    fontSize: 17,
                                    marginBottom: 5
                                }, index === itemIndex && {
                                    color: Colors.primary
                                }]}>{label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <ResourceCard />
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageSection: {
        height: 380,
        width: '100%'
    },
    topImage: {
        width: '100%',
        height: '100%',
        marginBottom: 20,
        borderRadius: 20
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