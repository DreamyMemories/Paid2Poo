import { useTimerStore } from "@/store/timerStore";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "@/components/ui/button";
import { DollarSign, Pause, Play, Square } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";

export interface TimerProps {
  isTimerRunning: boolean;
  setIsTimerRunning: (running: boolean) => void;
  hourlyWage: string;
  setHourlyWage: (wage: string) => void;
  initialTime?: number; // in seconds, optional for resuming a session
}

export function Timer({
  isTimerRunning,
  setIsTimerRunning,
  hourlyWage,
  setHourlyWage,
  initialTime = 0,
}: TimerProps) {
  const [elapsedSeconds, setElapsedSeconds] = useState(initialTime);
  const [currentEarnings, setCurrentEarnings] = useState("0.00");
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");
  };

  const calculateEarnings = (seconds: number, wage: string): string => {
    const hourlyRate = parseFloat(wage) || 0;
    const hours = seconds / 3600;
    const earnings = hourlyRate * hours;
    return earnings.toFixed(2);
  };

  useEffect(() => {
    if (isTimerRunning) {
      console.log("Starting timer with initial time:", initialTime);
      startTimeRef.current = Date.now() - elapsedSeconds * 1000;

      timerRef.current = setInterval(() => {
        if (startTimeRef.current) {
          const currentElapsed = Math.floor(
            (Date.now() - startTimeRef.current) / 1000
          );
          setElapsedSeconds(currentElapsed);

          // Update earnings in real-time
          const newEarnings = calculateEarnings(currentElapsed, hourlyWage);
          setCurrentEarnings(newEarnings);
        }
      }, 100);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isTimerRunning, hourlyWage, elapsedSeconds, initialTime]);

  const addSession = useTimerStore((state) => state.addSession);

  const endSession = () => {
    if (elapsedSeconds > 0) {
      const earnings = parseFloat(currentEarnings);
      addSession(elapsedSeconds, earnings);
    }
  };

  const resetTimer = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
      endSession();
    }
    setElapsedSeconds(0);
    setCurrentEarnings("0.00");
    startTimeRef.current = null;
  };

  return (
    <>
      <View style={styles.timerDisplay}>
        <Text style={styles.timerText}>{formatTime(elapsedSeconds)}</Text>
        <Text style={styles.earningsText}>💰 ${currentEarnings}</Text>
      </View>

      <View style={styles.timerControls}>
        <Button
          onPress={() => {
            if (isTimerRunning && elapsedSeconds > 0) {
              endSession();
            }
            setIsTimerRunning(!isTimerRunning);
          }}
          size="icon"
          variant={isTimerRunning ? "destructive" : "default"}
        >
          {isTimerRunning ? (
            <Pause size={24} color="#1e1e2e" />
          ) : (
            <Play size={24} color="#1e1e2e" />
          )}
        </Button>
        <Button size="icon" variant="secondary" onPress={resetTimer}>
          <Square size={24} color="#1e1e2e" />
        </Button>
      </View>

      <View style={styles.wageInputContainer}>
        <Text style={styles.inputLabel}>Hourly Wage</Text>
        <View style={styles.wageInputWrapper}>
          <DollarSign size={16} color="#a6e3a1" style={styles.wageInputIcon} />
          <Input
            value={hourlyWage}
            onChangeText={setHourlyWage}
            keyboardType="numeric"
            placeholder="25.00"
            style={styles.wageInput}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
});
