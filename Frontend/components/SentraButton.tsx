import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

type SentraButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

export default function SentraButton({
  title,
  onPress,
  style,
}: SentraButtonProps) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 240,
    height: 42,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#00D8E6",
    backgroundColor: "rgba(0, 216, 230, 0.12)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 26,
    marginBottom: 12,

    shadowColor: "#00D8E6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 10,
    elevation: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
});
