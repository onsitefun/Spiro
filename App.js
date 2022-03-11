import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi!</Text>
      <Text>Spiro app</Text>
      <image></image>
      <StatusBar style="auto" />
    </View>
  );
}

//this comment is test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#140",
    alignItems: "center",
    justifyContent: "center",
  },
});
