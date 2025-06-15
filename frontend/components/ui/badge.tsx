import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

export interface BadgeProps extends ViewProps {
  variant?: "default" | "secondary" | "outline" | "success";
  children?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Badge({
  variant = "default",
  style,
  textStyle,
  children,
  ...props
}: BadgeProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case "secondary":
        return "#fab387"; // Orange
      case "outline":
        return "transparent";
      case "success":
        return "#a6e3a1"; // Green
      default:
        return "#cba6f7"; // Purple
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "outline":
        return "#cdd6f4"; // Light text
      default:
        return "#1e1e2e"; // Dark text on colored backgrounds
    }
  };

  const getBorderStyle = () => {
    if (variant === "outline") {
      return {
        borderWidth: 1,
        borderColor: "#6c7086",
      };
    }
    return {};
  };

  const backgroundColor = getBackgroundColor();
  const color = getTextColor();
  const borderStyle = getBorderStyle();

  return (
    <View
      style={[styles.badge, { backgroundColor }, borderStyle, style]}
      {...props}
    >
      {typeof children === "string" ? (
        <Text style={[styles.text, { color }, textStyle]}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "JetBrainsMono",
  },
});
