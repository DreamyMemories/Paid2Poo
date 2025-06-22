import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Calendar, Clock, TrendingUp, Trophy } from "@/components/ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TimerTab } from "@/components/common/QuickStats";
import { AchievementsTab } from "@/components/tabs/AchievementsTab";
import { HistoryTab } from "@/components/tabs/HistoryTab";
import { StatsTab } from "@/components/tabs/StatsTab";

export default function Paid2PooApp() {
  const colorScheme = useColorScheme();

  const achievements = [
    {
      name: "Quick Wipe",
      description: "Complete a session under 2 minutes",
      icon: "⚡",
      unlocked: true,
    },
    {
      name: "Flush Millionaire",
      description: "Earn $1000 total",
      icon: "💰",
      unlocked: true,
    },
    {
      name: "Stool CEO",
      description: "Complete 100 sessions",
      icon: "👑",
      unlocked: false,
    },
    {
      name: "Bathroom Break",
      description: "5 minute session",
      icon: "☕",
      unlocked: true,
    },
    {
      name: "Royal Flush",
      description: "Perfect week streak",
      icon: "🃏",
      unlocked: false,
    },
    {
      name: "Time Lord",
      description: "Track 50 hours total",
      icon: "⏰",
      unlocked: false,
    },
  ];

  const weeklyStats = [
    { day: "Mon", sessions: 3, earnings: 12.5 },
    { day: "Tue", sessions: 2, earnings: 8.75 },
    { day: "Wed", sessions: 4, earnings: 16.25 },
    { day: "Thu", sessions: 3, earnings: 11.8 },
    { day: "Fri", sessions: 5, earnings: 22.4 },
    { day: "Sat", sessions: 2, earnings: 9.15 },
    { day: "Sun", sessions: 1, earnings: 4.2 },
  ];

  const recentSessions = [
    { time: "2:30 PM", duration: "8m 45s", earnings: "$3.65" },
    { time: "11:15 AM", duration: "12m 20s", earnings: "$5.15" },
    { time: "9:30 AM", duration: "6m 10s", earnings: "$2.55" },
    { time: "Yesterday 4:45 PM", duration: "15m 30s", earnings: "$6.45" },
  ];

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "left", "right", "bottom"]}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>💩 Paid2Poo</Text>
        <Text style={styles.headerSubtitle}>Get paid to go!</Text>
      </View>

      <Tabs defaultValue="timer" style={styles.tabs}>
        <TabsList style={styles.tabsList}>
          <TabsTrigger value="timer">
            <Clock size={20} color="#cdd6f4" />
          </TabsTrigger>
          <TabsTrigger value="stats">
            <TrendingUp size={20} color="#cdd6f4" />
          </TabsTrigger>
          <TabsTrigger value="history">
            <Calendar size={20} color="#cdd6f4" />
          </TabsTrigger>
          <TabsTrigger value="achievements">
            <Trophy size={20} color="#cdd6f4" />
          </TabsTrigger>
        </TabsList>

        <View style={styles.tabContent}>
          <TabsContent value="timer">
            <TimerTab />
          </TabsContent>

          <TabsContent value="stats">
            <StatsTab weeklyStats={weeklyStats} />
          </TabsContent>

          <TabsContent value="history">
            <HistoryTab
              recentSessions={recentSessions}
              currentStreak={12}
              personalBest={18}
            />
          </TabsContent>

          <TabsContent value="achievements">
            <AchievementsTab achievements={achievements} />
          </TabsContent>
        </View>
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2e",
  },
  header: {
    backgroundColor: "#313244",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#45475a",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f9e2af",
    fontFamily: "JetBrainsMono",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#a6adc8",
    fontFamily: "JetBrainsMono",
  },
  tabs: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  tabContent: {
    flex: 1,
  },
  tabsList: {
    backgroundColor: "#313244",
    borderBottomWidth: 1,
    borderBottomColor: "#45475a",
  },
});
