import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";

export interface InputProps extends TextInputProps {
  // Use TextStyle instead of ViewStyle for style prop
  style?: TextStyle;
}

export function Input({ style, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: "#45475a",
            borderColor: "#6c7086",
            color: "#cdd6f4",
          },
          style,
        ]}
        placeholderTextColor="#6c7086"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: "JetBrainsMono",
  },
});
