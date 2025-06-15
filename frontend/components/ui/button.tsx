import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({
  children,
  variant = "default",
  size = "default",
  className,
  style,
  textStyle,
  ...props
}: ButtonProps) {
  // Use our new color hook
  const backgroundColor = getBackgroundColor(variant);
  const textColor = getTextColor(variant);

  return (
    <TouchableOpacity
      style={[styles.button, getSizeStyle(size), { backgroundColor }, style]}
      {...props}
    >
      {typeof children === "string" ? (
        <Text style={[{ color: textColor }, styles.text, textStyle]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function getBackgroundColor(variant: ButtonProps["variant"]) {
  switch (variant) {
    case "default":
      return "#a6e3a1"; // Green
    case "destructive":
      return "#f38ba8"; // Red
    case "secondary":
      return "#fab387"; // Orange
    case "outline":
    case "ghost":
    case "link":
      return "transparent";
    default:
      return "#a6e3a1";
  }
}

function getTextColor(variant: ButtonProps["variant"]) {
  switch (variant) {
    case "default":
    case "destructive":
    case "secondary":
      return "#1e1e2e"; // Dark background
    case "outline":
    case "ghost":
    case "link":
      return "#cdd6f4"; // Light text
    default:
      return "#1e1e2e";
  }
}

function getSizeStyle(size: ButtonProps["size"]): ViewStyle {
  switch (size) {
    case "default":
      return {
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 6,
      };
    case "sm":
      return {
        height: 36,
        paddingHorizontal: 12,
        borderRadius: 4,
      };
    case "lg":
      return {
        height: 48,
        paddingHorizontal: 24,
        borderRadius: 8,
      };
    case "icon":
      return {
        height: 64,
        width: 64,
        borderRadius: 32,
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
      };
    default:
      return {};
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "JetBrainsMono",
  },
});
