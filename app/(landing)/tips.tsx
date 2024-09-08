import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, Stack } from 'expo-router'
import Swiper from 'react-native-swiper'
import { Colors } from '@/constants/Colors'
import AppButton from '@/components/buttons/app_button'


export default function tips() {


    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaView style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    dotStyle={{ width: 12 }}
                    activeDotStyle={{
                        backgroundColor: Colors.primary,
                        width: 22
                    }}
                    onIndexChanged={(index: number) => { }}
                >
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                        <AppButton
                            text='Get Started'
                            action={() => router.push('/(auth)/register')}
                            type='1'
                            outlined={false}
                        />
                    </View>
                </Swiper>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {},
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.primary
    },
})