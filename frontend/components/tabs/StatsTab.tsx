import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";

interface WeeklyStatItem {
  day: string;
  sessions: number;
  earnings: number;
}

export interface StatsTabProps {
  weeklyStats: WeeklyStatItem[];
}

export function StatsTab({ weeklyStats }: StatsTabProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Card style={styles.statsCard}>
        <CardHeader>
          <CardTitle>
            <View style={styles.cardTitleWithIcon}>
              <TrendingUp
                size={20}
                color="#f9e2af"
                style={styles.cardTitleIcon}
              />
              <Text style={styles.cardTitle}>Weekly Overview</Text>
            </View>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <View style={styles.weeklyStats}>
            {weeklyStats.map((day) => (
              <View key={day.day} style={styles.weeklyStatRow}>
                <View style={styles.weeklyStatDay}>
                  <Text style={styles.weeklyStatDayText}>{day.day}</Text>
                  <Progress
                    value={(day.sessions / 5) * 100}
                    style={styles.weeklyStatProgress}
                  />
                </View>
                <View style={styles.weeklyStatInfo}>
                  <Text style={styles.weeklyStatValue}>${day.earnings}</Text>
                  <Text style={styles.weeklyStatSessions}>
                    {day.sessions} sessions
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </CardContent>
      </Card>

      <View style={styles.quickStats}>
        <Card style={styles.quickStatCard}>
          <CardContent style={styles.quickStatContent}>
            <Text style={styles.quickStatValue}>$1,247.80</Text>
            <Text style={styles.quickStatLabel}>Total Earned</Text>
          </CardContent>
        </Card>
        <Card style={styles.quickStatCard}>
          <CardContent style={styles.quickStatContent}>
            <Text style={styles.quickStatValue}>156</Text>
            <Text style={styles.quickStatLabel}>Total Sessions</Text>
          </CardContent>
        </Card>
      </View>

      <Card style={styles.totalTimeCard}>
        <CardContent style={styles.totalTimeContent}>
          <Text style={styles.totalTimeValue}>49h 32m</Text>
          <Text style={styles.totalTimeLabel}>Total Time Tracked</Text>
          <Text style={styles.totalTimeAverage}>Average: 19 min/session</Text>
        </CardContent>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  contentContainer: {
    padding: 16,
    gap: 16,
    paddingBottom: 32,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "JetBrainsMono",
    color: "#f9e2af",
  },
  cardTitleWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitleIcon: {
    marginRight: 8,
  },
  statsCard: {
    marginBottom: 0,
  },
  weeklyStats: {
    gap: 12,
  },
  weeklyStatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  weeklyStatDay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
    marginRight: 16,
  },
  weeklyStatDayText: {
    width: 32,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "JetBrainsMono",
    color: "#a6adc8",
  },
  weeklyStatProgress: {
    flex: 1,
  },
  weeklyStatInfo: {
    alignItems: "flex-end",
  },
  weeklyStatValue: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "JetBrainsMono",
    color: "#a6e3a1",
  },
  weeklyStatSessions: {
    fontSize: 12,
    fontFamily: "JetBrainsMono",
    color: "#a6adc8",
  },
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
  totalTimeCard: {
    marginTop: 0,
  },
  totalTimeContent: {
    alignItems: "center",
    padding: 12,
  },
  totalTimeValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    fontFamily: "JetBrainsMono",
    color: "#cba6f7",
  },
  totalTimeLabel: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: "JetBrainsMono",
    color: "#a6adc8",
  },
  totalTimeAverage: {
    fontSize: 12,
    fontFamily: "JetBrainsMono",
    color: "#6c7086",
  },
});
