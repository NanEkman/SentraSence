import { View, Text, StyleSheet } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard efter inloggning</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#08141d",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
