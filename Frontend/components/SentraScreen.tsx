import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function SentraScreen({ children }: Props) {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("@/assets/images/Background.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.inner}>{children}</View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#020B14",
    overflow: "hidden",
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 10, 20, 0.28)",
    alignItems: "center",
  },

  inner: {
    flex: 1,
    width: "100%",
    maxWidth: 400,
    paddingHorizontal: 28,
    paddingTop: 150,
    paddingBottom: 48,
    alignItems: "center",
  },
});
