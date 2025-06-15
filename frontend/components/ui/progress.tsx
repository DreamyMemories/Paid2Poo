import React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

export interface ProgressProps extends ViewProps {
  value?: number;
  max?: number;
  style?: ViewStyle;
  progressStyle?: ViewStyle;
}

export function Progress({
  value = 0,
  max = 100,
  style,
  progressStyle,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max(0, value), max) / max;

  return (
    <View
      style={[
        styles.progressContainer,
        {
          backgroundColor: "#45475a",
        },
        style,
      ]}
      {...props}
    >
      <View
        style={[
          styles.progressBar,
          {
            width: `${percentage * 100}%`,
            backgroundColor: "#a6e3a1",
          },
          progressStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
  },
});
