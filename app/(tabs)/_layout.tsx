import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabsLayout() {
    return (
        <Tabs>
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
                        <Ionicons name="home" size={24} color={color} />
                }}
            />

            <Tabs.Screen name="inbox"
                options={{
                    title: 'Inbox',
                    tabBarIcon: ({ color }) =>
                        <Ionicons name="chatbubble" size={24} color={color} />
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