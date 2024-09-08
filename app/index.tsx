import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
// import { LogBox } from "react-native";

// LogBox.ignoreAllLogs();

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Bienvenue dans Tafel</Text>
      <Link href="/(auth)/register">Vers l'application</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
