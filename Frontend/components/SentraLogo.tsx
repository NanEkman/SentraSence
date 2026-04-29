import React from "react";
import { Image, StyleSheet } from "react-native";

type Props = {
  size?: "small" | "medium" | "large";
};

export default function SentraLogo({ size = "medium" }: Props) {
  return (
    <Image
      source={require("@/assets/images/SentraSenseLogo.png")}
      style={[
        styles.logo,
        size === "small" && styles.small,
        size === "medium" && styles.medium,
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

  medium: {
    width: 230,
    height: 160,
  },  

  large: {
    width: 460,
    height: 320,
  },
});
