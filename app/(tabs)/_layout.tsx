import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.primary,
            headerTitleStyle: {
                fontSize: 24,
                fontWeight: 'bold',
                color: Colors.primary
            },
            // headerLeft: () => {
            //     return (
            //         <View style={{
            //             paddingRight: 10,
            //             paddingTop: 20,
            //             justifyContent: 'center',
            //             marginLeft: 20
            //         }}>
            //             <Text style={{
            //                 fontSize: 26,
            //                 fontWeight: 'bold',
            //                 color: Colors.primary
            //             }}>
            //                 Hi, Princesse !
            //             </Text>
            //             <Text style={{
            //                 fontSize: 16,
            //                 fontWeight: 'bold',
            //             }}>
            //                 Let's start learning !
            //             </Text>
            //         </View>
            //     )
            // },
            // headerRight: () => <View style={{ marginRight: 20, flexDirection: 'row', gap: 20, alignItems: 'center' }}>
            //     <TouchableOpacity activeOpacity={.6}>
            //         <Ionicons name="cart-outline" size={28} color={Colors.primary} />
            //     </TouchableOpacity>
            //     <TouchableOpacity activeOpacity={.6}>
            //         <Ionicons name="notifications-outline" size={28} color={Colors.primary} />
            //     </TouchableOpacity>
            // </View>,
            // tab
        }}>
            <Tabs.Screen name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) =>
                        <Ionicons name="home" size={24} color={color} />
                }}
            />

            <Tabs.Screen name="courses"
                options={{
                    title: 'Courses',
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