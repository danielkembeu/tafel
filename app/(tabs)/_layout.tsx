import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.primary,
            headerTransparent: true,
            headerTitleStyle: {
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white'
            },
            headerBackgroundContainerStyle: {
                backgroundColor: Colors.primary
            }
        }}>
            <Tabs.Screen name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) =>
                        <Ionicons name="home" size={24} color={color} />
                }}
            />

            <Tabs.Screen name="resources"
                options={{
                    title: 'Resources',
                    tabBarIcon: ({ color }) =>
                        <Ionicons name="file-tray-full" size={24} color={color} />
                }}
            />

            <Tabs.Screen name="community"
                options={{
                    title: 'Community',
                    tabBarIcon: ({ color }) =>
                        <Ionicons name="earth" size={24} color={color} />
                }}
            />

            <Tabs.Screen name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) =>
                        <Ionicons name="person" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}