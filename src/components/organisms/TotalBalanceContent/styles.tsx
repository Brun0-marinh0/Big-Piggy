import { colors, palette, radii, spacing, typography } from "@/src/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.sm,
    padding: spacing.md,
    paddingRight: 0,
    borderColor: colors.borderColor,
    borderWidth: 1,
    gap: spacing.md,
  },
  balanceAmount: {
    fontSize: typography.size["2xl"],
    fontWeight: typography.weight.bold,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: spacing.md,
  },
  balanceToggle: {
    backgroundColor: palette.gray[0] + 33,
    padding: spacing.sm,
    borderRadius: radii.full,
  },
});
