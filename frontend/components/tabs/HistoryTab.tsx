import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "@/components/ui/icons";

interface SessionItem {
  time: string;
  duration: string;
  earnings: string;
}

export interface HistoryTabProps {
  recentSessions: SessionItem[];
  currentStreak: number;
  personalBest: number;
}

export function HistoryTab({
  recentSessions,
  currentStreak,
  personalBest,
}: HistoryTabProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Card style={styles.streakCard}>
        <CardHeader>
          <CardTitle>
            <View style={styles.cardTitleWithIcon}>
              <Target size={20} color="#f9e2af" style={styles.cardTitleIcon} />
              <Text style={styles.cardTitle}>Current Streak</Text>
            </View>
          </CardTitle>
        </CardHeader>
        <CardContent style={styles.streakContent}>
          <View style={styles.streakValueContainer}>
            <Text style={styles.fireEmoji}>🔥</Text>
            <Text style={styles.streakValue}>{currentStreak}</Text>
          </View>
          <Text style={styles.streakLabel}>Days in a row</Text>
          <Text style={styles.personalBest}>
            Personal best: {personalBest} days
          </Text>
        </CardContent>
      </Card>

      <Card style={styles.sessionsCard}>
        <CardHeader>
          <CardTitle>
            <Text style={styles.cardTitle}>Recent Sessions</Text>
          </CardTitle>
        </CardHeader>
        <CardContent style={styles.sessionsContent}>
          <View style={styles.sessionsList}>
            {recentSessions.map((session, index) => (
              <View key={index} style={styles.sessionItem}>
                <View style={styles.sessionInfo}>
                  <Text style={styles.sessionTime}>{session.time}</Text>
                  <Text style={styles.sessionDuration}>{session.duration}</Text>
                </View>
                <Text style={styles.sessionEarnings}>{session.earnings}</Text>
              </View>
            ))}
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 16,
    paddingBottom: 32, // Add extra padding at the bottom for scrolling
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
  streakCard: {
    marginBottom: 0,
  },
  streakContent: {
    alignItems: "center",
    paddingVertical: 16,
  },
  streakValueContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  fireEmoji: {
    fontSize: 24,
    marginRight: 8,
  },
  streakValue: {
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "JetBrainsMono",
    color: "#a6e3a1",
  },
  streakLabel: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: "JetBrainsMono",
    color: "#a6adc8",
  },
  personalBest: {
    fontSize: 12,
    fontFamily: "JetBrainsMono",
    color: "#6c7086",
  },
  sessionsCard: {
    marginTop: 0,
  },
  sessionsContent: {
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 8,
  },
  sessionsList: {
    gap: 8,
  },
  sessionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#45475a",
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
  },
  sessionInfo: {},
  sessionTime: {
    fontSize: 14,
    fontFamily: "JetBrainsMono",
    color: "#cdd6f4",
    marginBottom: 2,
  },
  sessionDuration: {
    fontSize: 12,
    fontFamily: "JetBrainsMono",
    color: "#a6adc8",
  },
  sessionEarnings: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "JetBrainsMono",
    color: "#a6e3a1",
  },
});
