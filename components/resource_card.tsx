import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { Colors } from '@/constants/Colors'
import { Resource } from '@/utils/interface/global'


type ResourceCardProps = {
  resource: Resource
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <TouchableOpacity activeOpacity={.8} style={styles.container}>
      {/* Image */}
      <Image resizeMode='cover' source={require('@/assets/images/app/cb1.png')} style={styles.placeholder} />

      {/* Informations */}
      <View>
        <Text style={{ fontWeight: 'bold' }}>{resource.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    margin: 6,
    width: 220,
    height: 260,
    gap: 12
  },
  placeholder: {
    width: '100%',
    height: '60%',
    borderRadius: 14,
    backgroundColor: ''
  }
})