import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { QuickStats } from "@/components/common/QuickStats";
import { Timer } from "@/components/common/Timer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";

export function TimerTab() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [hourlyWage, setHourlyWage] = useState("25.00");
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
          <Timer
            isTimerRunning={isTimerRunning}
            setIsTimerRunning={setIsTimerRunning}
            hourlyWage={hourlyWage}
            setHourlyWage={setHourlyWage}
          />
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <QuickStats />
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
    paddingBottom: 32,
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
});
