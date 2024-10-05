import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Card, Text } from 'react-native-paper';
import { Colors } from '@/constants/Colors';
import { Stack } from 'expo-router';

interface CourseFormInputs {
    title: string;
    description: string;
    subject: string;
}

const AddCourseForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<CourseFormInputs>();

    const onSubmit = (data: CourseFormInputs) => {
        console.log('Course added: ', data);
        // Logic to save the course
    };

    return (
        <View style={styles.container}>

            <Stack.Screen options={{
                headerTitleStyle: {
                    color: Colors.primary
                }
            }} />


            {/* Course Title */}
            <Controller
                control={control}
                name="title"
                defaultValue=""
                rules={{ required: 'Title is required' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        label="Course Title"
                        value={value}
                        onChangeText={onChange}
                        mode="outlined"
                        error={!!errors.title}
                    />
                )}
            />
            {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}

            {/* Course Description */}
            <Controller
                control={control}
                name="description"
                defaultValue=""
                rules={{ required: 'Description is required' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        label="Description"
                        value={value}
                        onChangeText={onChange}
                        mode="outlined"
                        multiline
                        numberOfLines={3}
                        error={!!errors.description}
                    />
                )}
            />
            {errors.description && <Text style={styles.errorText}>{errors.description.message}</Text>}


            {/* Course Title */}
            <Controller
                control={control}
                name="title"
                defaultValue=""
                rules={{ required: 'Title is required' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        label="Course Title"
                        value={value}
                        onChangeText={onChange}
                        mode="outlined"
                        error={!!errors.title}
                    />
                )}
            />
            {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}


            {/* Course Subject */}
            <Controller
                control={control}
                name="subject"
                defaultValue=""
                rules={{ required: 'Subject is required' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        label="Subject (e.g., Software Engineering)"
                        value={value}
                        onChangeText={onChange}
                        mode="outlined"
                        error={!!errors.subject}
                    />
                )}
            />
            {errors.subject && <Text style={styles.errorText}>{errors.subject.message}</Text>}


            {/* Submit Button */}
            <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
                Add Course
            </Button>
        </View>
    );
};

export default AddCourseForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    card: {
        marginBottom: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    submitButton: {
        marginTop: 40,
        backgroundColor: Colors.primary
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});
