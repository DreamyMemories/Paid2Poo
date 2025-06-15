/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

// Define a type for the paid2poo color keys
type Paid2PooColorKey = keyof typeof Colors.light.paid2poo &
  keyof typeof Colors.dark.paid2poo;

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

// Special hook for Paid2Poo colors
export function usePaid2PooColor(
  props: { light?: string; dark?: string },
  colorKey: Paid2PooColorKey
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme].paid2poo[colorKey];
  }
}
