import { colors, radii, spacing, typography } from "@/src/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: radii.sm,
    padding: spacing.sm,
    alignItems: "center",
    gap: spacing.sm,
    width: 144,
  },
  bankName: {
    color: colors.text_caption,
    fontSize: typography.size.sm,
  },
  cash: {
    color: colors.text_caption,
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
  },
});
