import { ColorSchemeName } from "react-native";

// Always return 'dark' regardless of system setting
export function useColorScheme(): NonNullable<ColorSchemeName> {
  return "dark";
}
