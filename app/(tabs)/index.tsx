import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '@/constants/global_styles'

export default function HomeScreen() {
  return (
    <SafeAreaView style={[globalStyles.defaultContainer]}>
      <Text>index</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})