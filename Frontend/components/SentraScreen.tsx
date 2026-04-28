import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function SentraScreen({ children }: Props) {
  const { width, height } = useWindowDimensions();

  return (
    <ImageBackground
      source={require("@/assets/images/Background.png")}
      style={[styles.background, { width, height }]}
      resizeMode="cover"
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    overflow: "hidden",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 10, 20, 0.28)",
    paddingHorizontal: 28,
    paddingTop: 78,
    paddingBottom: 48,
    overflow: "hidden",
  },
});
