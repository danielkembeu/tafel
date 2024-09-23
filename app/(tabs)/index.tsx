import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '@/constants/global_styles'
import CourseCard from '@/components/cards/course_card'
import AppSearchBar from '@/components/search_bar'
import CategoryTile from '@/components/category_tile'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

export default function HomeScreen() {
  return (
    <SafeAreaView style={[globalStyles.defaultContainer, styles.container]}>

      <AppSearchBar />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
        }}>
          Tous les cours
        </Text>

        <View style={styles.listWrapper}>
          <FlatList
            decelerationRate={.8}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Array.from({ length: 5 })}
            renderItem={({ index }) => <CourseCard />}
          />
        </View>

        <Text style={{ marginBottom: 20, fontWeight: 'bold', fontSize: 22 }}>Your categories</Text>

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
              // elevation: 2
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
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  listWrapper: {
    marginBottom: 20
  }
})