import { Redirect, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      {/* <Redirect href="/(details)/[courseId]" /> */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(landing)/tips" options={{ headerShown: false }} />
        <Stack.Screen name="(details)/[courseId]" options={{
          headerTitle: "Details",
          headerStyle: { backgroundColor: "#f4f4f4" },
          headerTitleStyle: { color: "#333" }
        }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
