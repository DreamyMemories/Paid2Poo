import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TimerSession {
  id: string;
  startTime: string;
  endTime: string;
  duration: number; // in seconds
  earnings: number;
}

interface TimerStats {
  todaysEarnings: number;
  sessionsToday: number;
  allSessions: TimerSession[];
}

interface TimerState extends TimerStats {
  addSession: (duration: number, earnings: number) => void;
  resetDailyStats: () => void;
}

export const useTimerStore = create<TimerState>()(
  persist(
    (set) => ({
      todaysEarnings: 0,
      sessionsToday: 0,
      allSessions: [],

      addSession: (duration, earnings) =>
        set((state) => {
          const session: TimerSession = {
            id: Date.now().toString(),
            startTime: new Date(Date.now() - duration * 1000).toISOString(),
            endTime: new Date().toISOString(),
            duration,
            earnings,
          };

          return {
            todaysEarnings: state.todaysEarnings + earnings,
            sessionsToday: state.sessionsToday + 1,
            allSessions: [session, ...state.allSessions],
          };
        }),

      resetDailyStats: () =>
        set(() => ({
          todaysEarnings: 0,
          sessionsToday: 0,
        })),
    }),
    {
      name: "timer-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
