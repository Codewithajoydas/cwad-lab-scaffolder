import { StyleSheet, Text, View } from "react-native";

import { Screen } from "@/components/ui/Screen";
import { theme } from "@/constants/theme";

export default function SettingsScreen() {
  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.description}>
          This screen demonstrates a second file-based Expo Router route.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: theme.spacing.md,
  },
  title: {
    color: theme.colors.text,
    fontSize: 30,
    fontWeight: "800",
  },
  description: {
    color: theme.colors.muted,
    fontSize: 16,
    lineHeight: 24,
  },
});