import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  label: string;
  checked: boolean;
  onToggle: () => void;
};

export default function SentraCheckbox({ label, checked, onToggle }: Props) {
  return (
    <Pressable style={styles.wrapper} onPress={onToggle}>
      <View style={styles.box}>
        {checked && <Ionicons name="checkmark" size={11} color="#8FB8C4" />}
      </View>

      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "78%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  box: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: "#5EAFC0",
    backgroundColor: "rgba(8, 22, 30, 0.45)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  label: {
    color: "#8FB8C4",
    fontSize: 12,
    fontWeight: "500",
  },
});
