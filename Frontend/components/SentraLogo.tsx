import React from "react";
import { Image, StyleSheet } from "react-native";

type Props = {
  size?: "small" | "medium" | "large";
};

export default function SentraLogo({ size = "medium" }: Props) {
  return (
    <Image
      source={require("@/assets/images/logga.png")}
      style={[
        styles.logo,
        size === "small" && styles.small,
        size === "large" && styles.large,
      ]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 230,
    height: 160,
  },

  small: {
    width: 190,
    height: 130,
  },

  large: {
    width: 270,
    height: 190,
  },
});
