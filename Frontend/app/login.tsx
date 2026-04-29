import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SentraScreen from "@/components/SentraScreen";
import SentraLogo from "@/components/SentraLogo";
import SentraInput from "@/components/SentraInput";
import SentraButton from "@/components/SentraButton";
import { router } from "expo-router";

export default function Login() {
  return (
    <SentraScreen>
      <View style={styles.content}>
        <SentraLogo size="large" />

        <Text style={styles.title}>Logga in</Text>

        <View style={styles.subtitleWrapper}>
          <Text style={styles.subtitle}>Välkommen tillbaka!</Text>
          <Text style={styles.subtitle}>Logga in för att fortsätta.</Text>
        </View>

        <View style={styles.form}>
          <SentraInput
            icon="mail"
            placeholder="E-post"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <SentraInput
            icon="lock-closed"
            placeholder="Lösenord"
            secureTextEntry
            style={styles.inputSpacing}
          />
        </View>

          <SentraButton
            title="Logga in"
            onPress={() => router.push("/")}
          />
      </View>
    </SentraScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    alignItems: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 10,
    marginBottom: 10,
  },

  subtitle: {
    color: "#DDEAF0",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
  },

  subtitleWrapper: {
    alignItems: "center",
    marginBottom: 22,
  },

  form: {
    width: "78%",
  },

  inputSpacing: {
    marginTop: 10,
  },
});