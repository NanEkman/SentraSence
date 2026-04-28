import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SentraScreen from "@/components/SentraScreen";
import SentraLogo from "@/components/SentraLogo";

export default function Login() {
  return (
    <SentraScreen>
      <View style={styles.content}>
        <SentraLogo size="medium" />

        <Text>Logga in</Text>

        {/* resten av login-formuläret */}
      </View>
    </SentraScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 20,
  },
});