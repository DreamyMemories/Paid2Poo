import React, { createContext, useContext, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

// Types
type TabsContextValue = {
  value: string;
  onValueChange: (value: string) => void;
};

// Context
const TabsContext = createContext<TabsContextValue | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      "Tabs compound components must be used within a Tabs component"
    );
  }
  return context;
}

// Components
export interface TabsProps extends ViewProps {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  style,
  ...props
}: TabsProps) {
  const [tabValue, setTabValue] = useState(defaultValue);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : tabValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setTabValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
      }}
    >
      <View style={[styles.tabs, style]} {...props}>
        {children}
      </View>
    </TabsContext.Provider>
  );
}

export interface TabsListProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function TabsList({ children, style, ...props }: TabsListProps) {
  return (
    <View
      style={[
        styles.tabsList,
        {
          backgroundColor: "#313244",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export interface TabsTriggerProps extends ViewProps {
  value: string;
  children: React.ReactNode;
  style?: ViewStyle;
  activeStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeTextStyle?: TextStyle;
}

export function TabsTrigger({
  value,
  children,
  style,
  activeStyle,
  textStyle,
  activeTextStyle,
  ...props
}: TabsTriggerProps) {
  const { value: selectedValue, onValueChange } = useTabsContext();
  const isActive = selectedValue === value;

  return (
    <Pressable
      style={[
        styles.tabsTrigger,
        {
          backgroundColor: isActive ? "#f9e2af" : "transparent",
        },
        style,
        isActive && activeStyle,
      ]}
      onPress={() => onValueChange(value)}
      {...props}
    >
      {typeof children === "string" ? (
        <Text
          style={[
            styles.tabsTriggerText,
            {
              color: isActive ? "#1e1e2e" : "#cdd6f4",
            },
            textStyle,
            isActive && activeTextStyle,
          ]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

export interface TabsContentProps extends ViewProps {
  value: string;
  children: React.ReactNode;
  style?: ViewStyle;
}

export function TabsContent({
  value,
  children,
  style,
  ...props
}: TabsContentProps) {
  const { value: selectedValue } = useTabsContext();
  const isSelected = selectedValue === value;

  if (!isSelected) return null;

  return (
    <View style={[styles.tabsContent, { flex: 1 }, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    width: "100%",
  },
  tabsList: {
    flexDirection: "row",
    borderRadius: 8,
    overflow: "hidden",
  },
  tabsTrigger: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tabsTriggerText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "JetBrainsMono",
  },
  tabsContent: {
    paddingTop: 10,
    flex: 1,
  },
});
