import { usePaid2PooColor } from "@/hooks/useThemeColor";
import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

export type CardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function Card({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: CardProps) {
  const backgroundColor = usePaid2PooColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    "cardBackground"
  );

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function CardHeader({ style, ...otherProps }: ViewProps) {
  return <View style={[styles.cardHeader, style]} {...otherProps} />;
}

export function CardContent({ style, ...otherProps }: ViewProps) {
  return <View style={[styles.cardContent, style]} {...otherProps} />;
}

export function CardTitle({
  style,
  children,
  ...otherProps
}: ViewProps & { children?: React.ReactNode }) {
  return (
    <View style={[styles.cardTitleContainer, style]} {...otherProps}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  cardHeader: {
    padding: 16,
  },
  cardContent: {
    padding: 16,
  },
  cardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
