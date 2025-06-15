import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Trophy } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";

interface AchievementItem {
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface AchievementsTabProps {
  achievements: AchievementItem[];
}

export function AchievementsTab({ achievements }: AchievementsTabProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;
  const progressPercentage = (unlockedCount / totalCount) * 100;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Card style={styles.achievementsCard}>
        <CardHeader>
          <CardTitle>
            <View style={styles.cardTitleWithIcon}>
              <Trophy size={20} color="#f9e2af" style={styles.cardTitleIcon} />
              <Text style={styles.cardTitle}>Achievements</Text>
            </View>
          </CardTitle>
        </CardHeader>
        <CardContent style={styles.achievementsContent}>
          <View style={styles.achievementsList}>
            {achievements.map((achievement, index) => (
              <View
                key={index}
                style={[
                  styles.achievementItem,
                  achievement.unlocked
                    ? styles.achievementUnlocked
                    : styles.achievementLocked,
                ]}
              >
                <Text style={styles.achievementIcon}>{achievement.icon}</Text>
                <View style={styles.achievementInfo}>
                  <Text
                    style={[
                      styles.achievementName,
                      achievement.unlocked
                        ? styles.achievementNameUnlocked
                        : styles.achievementNameLocked,
                    ]}
                  >
                    {achievement.name}
                  </Text>
                  <Text style={styles.achievementDescription}>
                    {achievement.description}
                  </Text>
                </View>
                {achievement.unlocked && (
                  <Badge variant="success" style={styles.achievementBadge}>
                    <Star size={12} color="#1e1e2e" />
                  </Badge>
                )}
              </View>
            ))}
          </View>
        </CardContent>
      </Card>

      <Card style={styles.progressCard}>
        <CardContent style={styles.progressContent}>
          <Text style={styles.progressValue}>
            {unlockedCount}/{totalCount} Unlocked
          </Text>
          <Text style={styles.progressLabel}>Achievement Progress</Text>
          <Progress value={progressPercentage} style={styles.progressBar} />
        </CardContent>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  contentContainer: {
    padding: 16,
    gap: 16,
    paddingBottom: 100,
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
  achievementsCard: {
    marginBottom: 0,
  },
  achievementsContent: {
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 8,
  },
  achievementsList: {
    gap: 8,
  },
  achievementItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    borderWidth: 1,
  },
  achievementUnlocked: {
    backgroundColor: "#45475a",
    borderColor: "#a6e3a1",
  },
  achievementLocked: {
    backgroundColor: "#313244",
    borderColor: "#6c7086",
    opacity: 0.6,
  },
  achievementIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementName: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "JetBrainsMono",
    marginBottom: 2,
  },
  achievementNameUnlocked: {
    color: "#a6e3a1",
  },
  achievementNameLocked: {
    color: "#6c7086",
  },
  achievementDescription: {
    fontSize: 12,
    fontFamily: "JetBrainsMono",
    color: "#a6adc8",
  },
  achievementBadge: {
    height: 24,
    width: 24,
    borderRadius: 12,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  progressCard: {
    marginTop: 0,
  },
  progressContent: {
    alignItems: "center",
    padding: 16,
  },
  progressValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    fontFamily: "JetBrainsMono",
    color: "#cba6f7",
  },
  progressLabel: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: "JetBrainsMono",
    color: "#a6adc8",
  },
  progressBar: {
    width: "100%",
  },
});
