import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = TextInputProps & {
  icon?: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
};

export default function SentraInput({ icon, style, ...props }: Props) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={14} color="#9CC6CF" />
        </View>
      )}

      <TextInput
        {...props}
        placeholderTextColor="#7F9CA7"
        selectionColor="#00D8E6"
        cursorColor="#00D8E6"
        underlineColorAndroid="transparent"
        autoCorrect={false}
        autoComplete="off"
        textContentType="none"
        style={[styles.input, Platform.OS === "web" && styles.webInput]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40, 
    borderRadius: 18,
    paddingHorizontal: 0, 
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "rgba(18, 34, 45, 0.55)", 
    borderWidth: 1,
    borderColor: "rgba(90, 220, 235, 0.35)", 

    shadowColor: "#00D8E6",
    shadowOpacity: 0.12, 
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },

    elevation: 3,
    overflow: "hidden",
  },

  input: {
    flex: 1,
    height: "100%",
    color: "#DDEAF0",
    fontSize: 12,
    padding: 0,
    margin: 0,
    paddingLeft: 10, 
    borderWidth: 0,
    backgroundColor: "transparent",
    includeFontPadding: false,
    textAlignVertical: "center",
  },

  iconBox: {
    width: 34,
    height: "100%",
    backgroundColor: "rgba(3, 14, 20, 0.55)",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },

  webInput: {
    outlineStyle: "none",
    boxShadow: "0 0 0 1000px rgba(18, 34, 45, 0.55) inset",
    WebkitBoxShadow: "0 0 0 1000px rgba(18, 34, 45, 0.55) inset",
    WebkitTextFillColor: "#DDEAF0",
    caretColor: "#00D8E6",
    transition: "background-color 9999s ease-in-out 0s",
  } as any,
});