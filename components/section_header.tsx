import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'


interface SectionHeaderProps {
    sectionHeaderRight: React.ReactNode | any;
    sectionTitle: string;
}

export default function SectionHeader({ sectionHeaderRight, sectionTitle }: SectionHeaderProps) {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 10,
                paddingHorizontal: 20
            }}>

            <Text style={{
                marginVertical: 10,
                fontSize: 18, fontWeight: 'bold',
                color: Colors.secondary
            }}>
                {sectionTitle}
            </Text>

            {sectionHeaderRight}
        </View>
    )
}

const styles = StyleSheet.create({})