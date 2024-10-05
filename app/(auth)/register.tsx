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
import { filieres } from '@/utils/data/filiere';
import { createNewUser } from '@/services/userServices';
import { Role } from '@/utils/interface/global';
import { throwError } from '@/utils/error_function';

type RegisterFormFields = {
    fullname: string;
    email: string;
    role: Role
}

export default function RegisterScreen() {

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            fullname: '',
            role: 'STUDENT',
            filiere: '',
            email: '',
            password: ''
        }
    });

    const [pending, transitionFn] = React.useTransition();


    const register = async (data: any) => {
        console.log({ formData: data });
        const validatedFields = RegisterSchema.safeParse(data);

        transitionFn(() => {
            if (validatedFields.success) {
                const { fullname, email, role } = data;

                const userData = {
                    id: `user_${role}_${Math.random() * 1000}`,
                    email,
                    role: role as Role,
                    name: fullname,
                    password: ''
                };

                try {
                    createNewUser(userData);
                    router.push("/(auth)/login");

                } catch (error: any) {
                    ToastAndroid.show(error.message, ToastAndroid.LONG);
                    console.log(error);
                }
            };
        });

    }


    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView
                showsVerticalScrollIndicator={false}>

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
                                <Text style={{ marginVertical: 8, fontSize: 18, fontWeight: 'bold' }}>Nom complet</Text>
                                <TextInput
                                    {...field}
                                    value={field.value}
                                    onChangeText={(text) => field.onChange(text)}
                                    placeholder='John Doe'
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
                                <Text style={{ marginVertical: 8, fontSize: 18, fontWeight: 'bold' }}>Adresse mail</Text>
                                <TextInput
                                    {...field}
                                    value={field.value}
                                    onChangeText={(text) => field.onChange(text)}
                                    placeholder='test@example.com'
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
                        name='password'
                        render={({ field, fieldState: { error } }) => (
                            <View style={{ gap: 2 }}>
                                <Text style={{ marginVertical: 8, fontSize: 18, fontWeight: 'bold' }}>Mot de passe</Text>
                                <TextInput
                                    {...field}
                                    value={field.value}
                                    onChangeText={(text) => field.onChange(text)}
                                    placeholder="example@1049"
                                    secureTextEntry
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
                            <>
                                <Text style={{ marginVertical: 8, fontSize: 18, fontWeight: 'bold' }}>Choisir un role</Text>
                                <View style={{
                                    width: '100%',
                                    marginVertical: 6,
                                    backgroundColor: '#eee',
                                    borderRadius: 10
                                }}>
                                    <Picker
                                        {...field}
                                        selectedValue={field.value}
                                        placeholder='Choisir un role'
                                        onValueChange={(itemValue) => field.onChange(itemValue)}
                                        style={{
                                            width: '100%'
                                        }}
                                    >
                                        <Picker.Item label="Student" value='STUDENT' />
                                        <Picker.Item label="Teacher" value='TEACHER' />
                                        <Picker.Item label="Admin" value='ADMIN' />
                                    </Picker>
                                </View>
                                <Text style={{ color: 'red' }}>{error?.message}</Text>
                            </>
                        )}
                    />


                    <Controller
                        control={form.control}
                        name='filiere'
                        render={({ field, fieldState: { error } }) => (
                            <>
                                <Text style={{ marginVertical: 8, fontSize: 18, fontWeight: 'bold' }}>Choisir une filière</Text>
                                <View style={{
                                    width: '100%',
                                    marginVertical: 6,
                                    backgroundColor: '#eee',
                                    borderRadius: 10
                                }}>
                                    <Picker
                                        {...field}
                                        selectedValue={field.value}
                                        placeholder='Choisir une filière'
                                        onValueChange={(itemValue) => field.onChange(itemValue)}
                                        style={{
                                            width: '100%'
                                        }}
                                    >
                                        {filieres.map((item, index) =>
                                            <Picker.Item key={item.key} label={item.text} value={item.key} />
                                        )}
                                    </Picker>
                                </View>
                                <Text style={{ color: 'red' }}>{error?.message}</Text>
                            </>
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
                        text='Continue as visitor'
                        action={() => router.push("/(tabs)/")}
                        type='2'
                    />

                </View>
            </ScrollView >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})