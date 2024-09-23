import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';


type CategoryTileProps = {
    selected: boolean;
    title?: string;
    ionicIconName: string;
};

const DEFAULT_COLOR = '#555';


export default function CategoryTile({ selected, title, ionicIconName }: CategoryTileProps) {
    return (
        <TouchableOpacity activeOpacity={.8} style={[styles.wrapper, selected && {
            borderColor: Colors.primary,
            borderWidth: 2,

        }]}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12
            }}>
                {/* @ts-ignore */}
                <Ionicons name={ionicIconName} size={18} color={selected ? Colors.primary : DEFAULT_COLOR} />
                <Text style={[styles.text, selected && {
                    color: Colors.primary
                }]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 8,
        marginHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 18,
    },
    text: {
        color: DEFAULT_COLOR,
        fontSize: 16,
        fontWeight: 'bold'
    }
});