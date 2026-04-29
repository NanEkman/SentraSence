import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
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

        {/* <Text style={styles.title}>Logga in</Text> */}

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

        <Pressable
          style={styles.forgotPasswordWrapper}
          onPress={() => router.push("/forgot-password")}
        >
          <Text style={styles.forgotPasswordText}>Glömt lösenord?</Text>
        </Pressable>

        <SentraButton title="Logga in" onPress={() => router.push("/")} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Inte medlem?</Text>

        <Pressable onPress={() => router.push("/register")}>
          <Text style={styles.createAccountText}> Skapa konto</Text>
        </Pressable>
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

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    color: "#AAB8C0",
    fontSize: 12,
    textAlign: "center",
    alignSelf: "center",
  },

  createAccountText: {
    color: "#00D8E6",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
    alignSelf: "center",
  },

  forgotPasswordWrapper: {
    width: "78%",
    alignItems: "flex-start",
    marginTop: 6,
    marginBottom: 6,
  },

  forgotPasswordText: {
    color: "#8FB8C4",
    fontSize: 12,
    fontWeight: "500",
  },
});