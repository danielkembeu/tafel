import { ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Picker } from '@react-native-picker/picker';
import AppButton from '@/components/buttons/app_button';
import { router } from 'expo-router';
import { User } from '@/utils/interface/user';
import axios from 'axios';

type RegisterFormFields = {
    fullname: string;
    email: string;
    role: 'STUDENT' | 'TEACHER'
}

const BASE_USER_ENDPOINT = 'http://10.0.2.2:4100/users';
const URL = `${BASE_USER_ENDPOINT}/create`;


export default function RegisterScreen() {

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            fullname: '',
            role: 'STUDENT',
            email: ''
        }
    });

    const [pending, transitionFn] = React.useTransition();
    const [user, setUser] = React.useState<User | null>(null);


    const register = async (data: RegisterFormFields) => {
        console.log({ formData: data });

        const validatedFields = RegisterSchema.safeParse(data);

        if (validatedFields.success) {
            const { fullname, email, role } = data;

            const userData = {
                email,
                role,
                name: fullname
            };

            try {
                const response = await axios.get(BASE_USER_ENDPOINT);
                console.log({
                    data: response.data,
                    code: response.status
                });
            } catch (error: any) {
                ToastAndroid.show(error.message, ToastAndroid.LONG);
                console.log(error);
            }
        };

    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                        name='fullname'
                        render={({ field, fieldState: { error } }) => (
                            <View style={{ gap: 2 }}>
                                <Text style={{ marginVertical: 8, fontSize: 18, fontWeight: 'bold' }}>Fullname</Text>
                                <TextInput
                                    {...field}
                                    value={field.value}
                                    onChangeText={(text) => field.onChange(text)}
                                    placeholder='Enter your Fullname'
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

                    <Controller
                        control={form.control}
                        name='role'
                        render={({ field, fieldState: { error } }) => (
                            <View style={{
                                width: '100%',
                                marginVertical: 6
                            }}>
                                <Text style={{ marginVertical: 8, fontSize: 18, fontWeight: 'bold' }}>Select a Role</Text>
                                <Picker
                                    {...field}
                                    selectedValue={field.value}
                                    placeholder='Select the User role'
                                    onValueChange={(itemValue) => field.onChange(itemValue)}
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    <Picker.Item label="Student" value="STUDENT" />
                                    <Picker.Item label="Teacher" value="TEACHER" />
                                </Picker>
                                <Text>{error?.message}</Text>
                            </View>
                        )}
                    />
                </View>

                <View style={{
                    width: '100%', padding: 32,
                    alignItems: 'center'
                }}>
                    <AppButton
                        disabled={pending}
                        text='Register'
                        action={form.handleSubmit(register)}
                        type='1'
                    />

                    <AppButton
                        disabled={pending}
                        text='Sign in instead'
                        action={() => router.push("/(auth)/login")}
                        type='2'
                        outlined
                    />


                    <AppButton
                        disabled={pending}
                        text='Visit'
                        action={() => router.replace("/(tabs)/")}
                        type='1'
                        outlined
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})