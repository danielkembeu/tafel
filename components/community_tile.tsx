import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { InlineButton } from '@/app/(tabs)/community'
import { Link } from 'expo-router'

export default function CommunityPreviewTile({ title }: { title: string }) {
    return (
        // @ts-ignore
        <Link href="/(room)/[roomId]" asChild>
            <TouchableOpacity style={styles.container}>
                <View style={{ width: '30%' }}>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={require('@/assets/images/app/cb2.png')} />
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    alignItems: 'center',
                    width: '70%'
                }}>
                    <View style={styles.infos}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            width: 200
                        }}>{title}</Text>
                        <Text>Members: 420</Text>
                        <InlineButton
                            text='Voir'
                            iiconName='eye'
                        />
                    </View>

                    <View style={styles.iconBox}>
                        <Ionicons name='chevron-forward' size={18} color={Colors.secondary} />
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 6,
    },
    infos: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        justifyContent: 'space-between'
    },
    iconBox: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 40,
        height: 40
    }

})