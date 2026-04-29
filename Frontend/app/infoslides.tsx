import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { router } from "expo-router";
import SentraScreen from "@/components/SentraScreen";
import SentraLogo from "@/components/SentraLogo";
import SentraButton from "@/components/SentraButton";

const slides = [
  {
    title: "Välkommen till SentraSense",
    description:
      "Din trygghetsapp vid nödsituationer. Snabb, säker och AI-driven hjälp när du behöver det som mest.",
  },
  {
    title: "AI-baserad trygghet",
    description:
      "SentraSense använder AI för att snabbt upptäcka och agera vid nödsituationer.",
  },
  {
    title: "Alltid nära till hjälp",
    description:
      "Med ett tryck kan du larma dina kontakter och få hjälp direkt.",
  },
];

export default function InfoSlides() {
  const [current, setCurrent] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const nextSlide = () => {
    if (current === slides.length - 1) {
      router.push("/register");
      return;
    }

    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 160,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      setCurrent((prev) => prev + 1);
    }, 160);
  };

  return (
    <SentraScreen>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <SentraLogo size="large" />

        <Text style={styles.title}>{slides[current].title}</Text>

        <Text style={styles.description}>{slides[current].description}</Text>
      </Animated.View>

      <View style={styles.bottomContent}>
        <SentraButton
          title={current < slides.length - 1 ? "Nästa" : "Skapa konto"}
          onPress={nextSlide}
          style={styles.slideButton}
        />

        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, current === i && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </SentraScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    color: "#00E6F6",
    fontWeight: "900",
    marginBottom: 18,
    textAlign: "center",
    width: "100%",
    textShadowColor: "rgba(0, 230, 246, 0.75)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
  },

  description: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 24,
    textAlign: "center",
    width: "100%",
    maxWidth: 320,
  },

  bottomContent: {
    alignItems: "center",
  },

  slideButton: {
    marginBottom: 30,
  },

  dots: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.45)",
  },

  activeDot: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#00E6F6",
    shadowColor: "#00E6F6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 8,
  },
});
