import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import SentraButton from "@/components/SentraButton";

export default function LandingPage() {
  return (
    <ImageBackground
      source={require("@/assets/images/Background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Image
            source={require("@/assets/images/logga.png")}
            style={styles.logo}
            contentFit="contain"
          />

          <Text style={styles.title}>Din trygghetsapp vid nödsituationer</Text>

          <Text style={styles.subtitle}>
            Snabb, säker och AI-driven hjälp när du behöver det som mest.
          </Text>

          <SentraButton
            title="Kom igång"
            onPress={() => router.push("/infoslides")}
            style={styles.button}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Har du redan ett konto? </Text>

          <Pressable onPress={() => router.push("/login")}>
            <Text style={styles.loginText}>Logga in</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 10, 20, 0.20)",
    paddingHorizontal: 28,
    paddingTop: 78,
    paddingBottom: 48,
    justifyContent: "space-between",
  },

  content: {
    alignItems: "center",
    marginTop: 18,
  },

  logo: {
    width: 235,
    height: 170,
    marginBottom: 34,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    color: "#DDEAF0",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    maxWidth: 280,
    marginBottom: 64,
  },

  button: {
    maxWidth: 240,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    color: "#AAB8C0",
    fontSize: 12,
  },

  loginText: {
    color: "#00D8E6",
    fontSize: 12,
    fontWeight: "800",
  },
});
