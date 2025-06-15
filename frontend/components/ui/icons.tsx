import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Circle, Line, Path, Polyline, Rect, Svg } from "react-native-svg";

interface IconProps {
  size?: number;
  color?: string;
  style?: ViewStyle;
}

// Helper function to create SVG icons
function createIcon(
  paths: React.ReactNode,
  defaultSize: number = 24,
  viewBox: string = "0 0 24 24"
) {
  const IconComponent = ({
    size = defaultSize,
    color = "currentColor",
    style,
  }: IconProps) => (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths}
      </Svg>
    </View>
  );

  // Set display name for the component
  IconComponent.displayName = "Icon";

  return IconComponent;
}

// Lucide Icons
export const Play = createIcon(<Path d="m5 3 14 9-14 9V3z" />);

export const Pause = createIcon(
  <>
    <Rect x="6" y="4" width="4" height="16" />
    <Rect x="14" y="4" width="4" height="16" />
  </>
);

export const Square = createIcon(
  <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
);

export const DollarSign = createIcon(
  <>
    <Line x1="12" y1="1" x2="12" y2="23" />
    <Path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </>
);

export const Clock = createIcon(
  <>
    <Circle cx="12" cy="12" r="10" />
    <Polyline points="12 6 12 12 16 14" />
  </>
);

export const TrendingUp = createIcon(
  <>
    <Polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <Polyline points="17 6 23 6 23 12" />
  </>
);

export const Calendar = createIcon(
  <>
    <Rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <Line x1="16" y1="2" x2="16" y2="6" />
    <Line x1="8" y1="2" x2="8" y2="6" />
    <Line x1="3" y1="10" x2="21" y2="10" />
  </>
);

export const Trophy = createIcon(
  <>
    <Path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <Path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <Path d="M4 22h16" />
    <Path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <Path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <Path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </>
);

export const Target = createIcon(
  <>
    <Circle cx="12" cy="12" r="10" />
    <Circle cx="12" cy="12" r="6" />
    <Circle cx="12" cy="12" r="2" />
  </>
);

export const Star = createIcon(
  <Path d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
