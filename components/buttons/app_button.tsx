import { TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import React from 'react';
import { CustomButtonProps } from '@/utils/interface/app_button_type';
import { Colors } from '@/constants/Colors';

// Getting the window's width
const width = Dimensions.get("window").width;

export default function AppButton({
    type = '1',
    action,
    text,
    outlined,
    disabled
}: CustomButtonProps) {
    
    return (
        <>
            {
                outlined ? (
                    <TouchableOpacity
                        disabled={disabled}
                        activeOpacity={0.8}
                        style={[styles.button, styles[`out_${type}`]]}
                        onPress={action}>
                        <Text style={[styles.text, styles[`text_${type}`]]}>
                            {text}
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        disabled={disabled}
                        activeOpacity={0.8}
                        style={[styles.button, styles[type]]}
                        onPress={action}>
                        <Text style={[styles.text, styles.text_default]}>
                            {text}
                        </Text>
                    </TouchableOpacity>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 8,
        height: 48,
        width: "100%",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    1: { backgroundColor: Colors.primary },
    2: { backgroundColor: Colors.secondary },

    out_1: { borderColor: Colors.primary, borderWidth: 2 },
    out_2: { borderColor: Colors.secondary, borderWidth: 2 },

    text: { fontWeight: 'bold', fontSize: 16 },
    text_default: { color: Colors.light.background, fontWeight: "500" },
    text_1: { color: Colors.primary, fontWeight: "500" },
    text_2: { color: Colors.secondary, fontWeight: "500" }
});