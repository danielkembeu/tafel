import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CourseCard from '@/components/cards/course_card';
import CategoryTile from '@/components/category_tile';
import AppSearchBar from '@/components/search_bar';
import SectionHeader from '@/components/section_header';
import { courses } from '@/utils/data/courses';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { InlineButton } from './community';
import { getTeacherName } from '@/utils/utils';
import { router, Stack } from 'expo-router';

export default function ResourceScreen() {

    return (
        <SafeAreaView style={styles.container}>

            <Stack.Screen options={{
                headerRight: () => (
                    <View style={{ marginRight: 20 }}>
                        <TouchableOpacity onPress={() => router.push('/add_course')}>
                            <Ionicons
                                name='add-circle'
                                color={Colors.primary}
                                size={32}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }} />

            <ScrollView showsVerticalScrollIndicator={false} >

                <View style={{ marginHorizontal: 20 }}>
                    <AppSearchBar />
                </View>

                <SectionHeader
                    sectionTitle='Mes cours'
                    sectionHeaderRight={false}
                />

                <View style={{ alignItems: 'center', width: '100%' }}>
                    {
                        courses.map((course) =>
                            <CourseCard
                                type='FULL'
                                id={course.id}
                                key={course.id}
                                title={course.title}
                                description={course.description}
                                author={getTeacherName(course.teacherId)!}
                                communityMemberCount={40}
                                resourcesCount={0}
                            />
                        )
                    }
                </View>

            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    listWrapper: {
        marginBottom: 20
    }
})