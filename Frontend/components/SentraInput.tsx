import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = TextInputProps & {
  icon?: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
};

export default function SentraInput({ icon, style, ...props }: Props) {
  return (
    <View style={[styles.container, style]}>
      {icon && <Ionicons name={icon} size={18} color="#A7C7D1" />}

      <TextInput
        {...props}
        placeholderTextColor="#8FA7B0"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 44,
    borderRadius: 18,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,

    backgroundColor: "rgba(0, 18, 30, 0.72)",
    borderWidth: 1,
    borderColor: "rgba(0, 216, 230, 0.22)",

    shadowColor: "#00D8E6",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },

    elevation: 5,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 13,
    paddingVertical: 0,
  },
});
