import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { Screen } from "@/components/ui/Screen";
import { theme } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>CWAD Expo Template</Text>
        <Text style={styles.title}>Build your mobile app from a professional foundation.</Text>
        <Text style={styles.description}>
          Expo Router, TypeScript, testing, formatting, and a clean feature-ready structure are
          already configured.
        </Text>

        <Link href="/settings" style={styles.link}>
          Open settings
        </Link>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: theme.spacing.lg,
  },
  eyebrow: {
    color: theme.colors.muted,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  title: {
    color: theme.colors.text,
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 40,
  },
  description: {
    color: theme.colors.muted,
    fontSize: 16,
    lineHeight: 24,
  },
  link: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    overflow: "hidden",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
});