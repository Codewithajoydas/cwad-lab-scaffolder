import { useColorScheme } from "react-native";

export function useAppTheme() {
  const colorScheme = useColorScheme();

  return {
    colorScheme,
    isDark: colorScheme === "dark",
  };
}