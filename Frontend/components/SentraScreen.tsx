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
    overflow: "hidden",
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  overlay: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 10, 20, 0.28)",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  inner: {
    flex: 1,
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    paddingHorizontal: 28,
    paddingTop: 78,
    paddingBottom: 48,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});
