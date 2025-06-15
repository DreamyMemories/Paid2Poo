import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Pause, Play, Square } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";

export interface TimerTabProps {
  isTimerRunning: boolean;
  setIsTimerRunning: (running: boolean) => void;
  currentTime: string;
  currentEarnings: string;
  hourlyWage: string;
  setHourlyWage: (wage: string) => void;
}

export function TimerTab({
  isTimerRunning,
  setIsTimerRunning,
  currentTime,
  currentEarnings,
  hourlyWage,
  setHourlyWage,
}: TimerTabProps) {
  return (
    <KeyboardAwareScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      extraScrollHeight={100}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <Card>
        <CardHeader>
          <CardTitle>
            <Text style={styles.cardTitle}>Current Session</Text>
          </CardTitle>
        </CardHeader>
        <CardContent style={styles.timerContent}>
          <View style={styles.timerDisplay}>
            <Text style={styles.timerText}>{currentTime}</Text>
            <Text style={styles.earningsText}>💰 ${currentEarnings}</Text>
          </View>

          <View style={styles.timerControls}>
            <Button
              onPress={() => setIsTimerRunning(!isTimerRunning)}
              size="icon"
              variant={isTimerRunning ? "destructive" : "default"}
            >
              {isTimerRunning ? (
                <Pause size={24} color="#1e1e2e" />
              ) : (
                <Play size={24} color="#1e1e2e" />
              )}
            </Button>
            <Button size="icon" variant="secondary">
              <Square size={24} color="#1e1e2e" />
            </Button>
          </View>

          <View style={styles.wageInputContainer}>
            <Text style={styles.inputLabel}>Hourly Wage</Text>
            <View style={styles.wageInputWrapper}>
              <DollarSign
                size={16}
                color="#a6e3a1"
                style={styles.wageInputIcon}
              />
              <Input
                value={hourlyWage}
                onChangeText={setHourlyWage}
                keyboardType="numeric"
                placeholder="25.00"
                style={styles.wageInput}
              />
            </View>
          </View>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <View style={styles.quickStats}>
        <Card style={styles.quickStatCard}>
          <CardContent style={styles.quickStatContent}>
            <Text style={styles.quickStatValue}>$85.40</Text>
            <Text style={styles.quickStatLabel}>Today&apos;s Earnings</Text>
          </CardContent>
        </Card>
        <Card style={styles.quickStatCard}>
          <CardContent style={styles.quickStatContent}>
            <Text style={styles.quickStatValue}>7</Text>
            <Text style={styles.quickStatLabel}>Sessions Today</Text>
          </CardContent>
        </Card>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
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
  timerContent: {
    gap: 24,
  },
  timerDisplay: {
    alignItems: "center",
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "JetBrainsMono",
    color: "#a6e3a1",
  },
  earningsText: {
    fontSize: 20,
    fontFamily: "JetBrainsMono",
    color: "#f9e2af",
  },
  timerControls: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  wageInputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: "JetBrainsMono",
    color: "#a6adc8",
  },
  wageInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  wageInputIcon: {
    marginRight: 8,
  },
  wageInput: {
    flex: 1,
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
});
