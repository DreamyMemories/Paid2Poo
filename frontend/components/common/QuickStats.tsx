import { useTimerStore } from "@/store/timerStore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardContent } from "../ui/card";

export interface QuickStatsProps {
  // Additional props if needed
}

export function QuickStats({}: QuickStatsProps) {
  // Get stats from the store
  const { todaysEarnings, sessionsToday } = useTimerStore();

  return (
    <View style={styles.quickStats}>
      <Card style={styles.quickStatCard}>
        <CardContent style={styles.quickStatContent}>
          <Text style={styles.quickStatValue}>
            ${todaysEarnings.toFixed(2)}
          </Text>
          <Text style={styles.quickStatLabel}>Today&apos;s Earnings</Text>
        </CardContent>
      </Card>
      <Card style={styles.quickStatCard}>
        <CardContent style={styles.quickStatContent}>
          <Text style={styles.quickStatValue}>{sessionsToday}</Text>
          <Text style={styles.quickStatLabel}>Sessions Today</Text>
        </CardContent>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  quickStats: {
    flexDirection: "row",
    gap: 16,
  },
  quickStatCard: {
    flex: 1,
  },
  quickStatContent: {
    alignItems: "center",
    padding: 12,
  },
  quickStatValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    fontFamily: "JetBrainsMono",
    color: "#a6e3a1",
  },
  quickStatLabel: {
    fontSize: 12,
    fontFamily: "JetBrainsMono",
    color: "#a6adc8",
  },
});
