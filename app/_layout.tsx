import { Colors } from "@/constants/Colors";
import { Redirect, Stack } from "expo-router";

export default function RootLayout() {
    return (
        <>
            {/* <Redirect href="/(details)/[courseId]" /> */}
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="(landing)/tips" />
                <Stack.Screen name="(details)/[courseId]" options={{
                    headerShown: true
                }} />
                <Stack.Screen name="(room)/[roomId]" options={{
                    headerShown: true,
                    headerTitle: "Discussions",
                    headerStyle: { backgroundColor: "#f4f4f4" },
                    headerTitleStyle: { color: "#333" }
                }} />
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="add_course" options={{
                    headerShown: true,
                    headerTitle: "Add a Course",
                    headerStyle: { backgroundColor: "#f4f4f4" },
                    headerTitleStyle: { color: Colors.primary }
                }} />
            </Stack>
        </>
    );
}
