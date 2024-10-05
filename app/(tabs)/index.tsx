import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CourseCard from '@/components/cards/course_card'
import AppSearchBar from '@/components/search_bar'
import CategoryTile from '@/components/category_tile'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import SectionHeader from '@/components/section_header'
import { courses } from '@/utils/data/courses'
import { InlineButton } from './community'
import { router } from 'expo-router'
import { getTeacherName } from '@/utils/utils'

export default function HomeScreen() {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginHorizontal: 20 }}>
                    <AppSearchBar />
                </View>

                <SectionHeader
                    sectionTitle='Mes cours'
                    sectionHeaderRight={
                        <InlineButton
                            text='Voir tout'
                            iiconName='chevron-forward-circle'
                            // @ts-ignore
                            action={() => router.push('/(tabs)/courses')}
                        />
                    }
                />

                <View style={styles.listWrapper}>
                    <FlatList
                        decelerationRate={.8}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 10 }}
                        data={courses}
                        renderItem={({ item, index }) =>
                            <CourseCard
                                id={item.id}
                                key={index}
                                title={item.title}
                                description={item.description}
                                author={getTeacherName(item.teacherId)!}
                                communityMemberCount={40}
                                resourcesCount={item.resources?.length!}
                            />
                        }
                    />

                </View>

                <SectionHeader
                    sectionTitle='Mes categories'
                    sectionHeaderRight={<></>}
                />

                <View style={styles.listWrapper}>
                    <FlatList
                        decelerationRate={.8}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={[
                            { id: 1, name: 'Web Development', selected: true, icon: 'globe' },
                            { id: 2, name: 'Design', selected: true, icon: 'pencil' },
                            { id: 3, name: 'Data Science', selected: false, icon: 'analytics' },
                            { id: 4, name: 'Mobile Development', selected: true, icon: 'phone-portrait' },
                            { id: 5, name: 'Marketing', selected: false, icon: 'megaphone' },
                            { id: 6, name: 'Business', selected: false, icon: 'briefcase' },
                        ]}
                        renderItem={({ item }) =>
                            <CategoryTile
                                key={item.id}
                                title={item.name}
                                ionicIconName={item.icon}
                                selected={item.selected} />
                        }
                    />
                </View>

                <View style={{ paddingHorizontal: 20, gap: 10 }}>
                    {
                        Array.from({ length: 6 }).map((_, index) => (
                            <View key={index} style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginBottom: 10,
                                width: '100%',
                                height: 120,
                                backgroundColor: 'white',
                                borderRadius: 10,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                elevation: 6
                            }}>
                                <View style={{
                                    width: '60%',
                                    padding: 10,
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                }}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 18,
                                        marginBottom: 10,
                                    }}>
                                        UI/UX Design for beginners. Typographic rules 4 hours.
                                    </Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                        {Array.from({ length: 5 }).map((_, i) => <Ionicons key={i} name='star' size={16} color={Colors.primary} />)}
                                    </View>

                                </View>
                                <View style={{
                                    height: '100%',
                                    width: '30%',
                                }}>
                                    <Image style={{
                                        width: '100%',
                                        height: '100%',
                                    }} source={require('@/assets/images/app/cb1.png')} resizeMode="contain" />
                                </View>
                            </View>
                        ))
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 20,
        backgroundColor: 'white',
        flex: 1,
    },
    listWrapper: {
        marginBottom: 20
    }
})