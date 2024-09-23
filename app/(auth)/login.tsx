import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Picker } from '@react-native-picker/picker';
import AppButton from '@/components/buttons/app_button';
import { router } from 'expo-router';
import { createNewUser, getAllUsers } from '@/services/userServices';
import { User } from '@/utils/interface/user';

type LoginFormFields = {
    email: string;
}

export default function RegisterScreen() {

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: ''
        }
    });

    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState<User | null>(null);


    const login = async (data: LoginFormFields) => {
        console.log({ data });
        setLoading(true);
        const validatedFields = LoginSchema.safeParse(data);

        const allUsers = await getAllUsers();

        if (validatedFields.success) {
            const { email } = data;
            const userData = {
                email
            }
            
            console.log(userData);
        }
    }

    return (
        <SafeAreaView style={[styles.container]}>

            <View style={{
                width: '100%',
                height: 260,
                backgroundColor: Colors.primary,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                    justifyContent: 'center',
                    marginBottom: 100
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 40 }}>
                        Tafel
                    </Text>
                    <View style={{
                        width: 16, aspectRatio: 1, borderRadius: 50,
                        backgroundColor: Colors.secondary,
                        position: 'relative',
                        top: 10
                    }} />
                </View>
            </View>

            <View style={{
                width: '100%',
                padding: 32,
            }}>

                <Controller
                    control={form.control}
                    name='email'
                    render={({ field, fieldState: { error } }) => (
                        <View style={{ gap: 2 }}>
                            <Text style={{ marginVertical: 8, fontSize: 18, fontWeight: 'bold' }}>Email Address</Text>
                            <TextInput
                                {...field}
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)}
                                placeholder='Enter your Fullname'
                                keyboardType="email-address"
                                style={{
                                    width: '100%',
                                    borderRadius: 6,
                                    borderWidth: 2,
                                    borderColor: error ? 'red' : Colors.secondary,
                                    height: 48,
                                    paddingHorizontal: 20
                                }}
                            />
                            <Text style={{ color: 'red' }}>{error?.message}</Text>
                        </View>
                    )}
                />

            </View>

            <View style={{
                width: '100%', padding: 32,
                alignItems: 'center'
            }}>
                <AppButton
                    disabled={loading}
                    text='Login'
                    action={form.handleSubmit(login)}
                    type='1'
                />

                <AppButton
                    disabled={loading}
                    text='Create an account'
                    action={() => router.push("/(auth)/register")}
                    type='2'
                    outlined
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})