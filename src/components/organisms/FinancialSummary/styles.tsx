import { colors, palette, radii, spacing, typography } from "@/src/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
  },
  cardContainer: {
    backgroundColor: colors.surface_bright,
    borderRadius: radii.md,
    padding: spacing.sm,
    gap: spacing.xs,
    flex: 1,
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
  bankName: {
    color: colors.text_caption,
    fontSize: typography.size.sm,
  },
  textWon: {
    color: palette.green[500],
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
  },
  textLost: {
    color: palette.red[500],
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
  },
});
