import { spacing, typography } from "@/src/styles";
import { colors, palette } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    borderBottomWidth: 1,
    backgroundColor: colors.surface_bright,
    padding: 6,
    alignItems: "flex-start",
    gap: 2,
    flex: 1,
    borderRadius: 6,
  },
  cardContainerStyleCard: {
    flexDirection: "column",
    borderBottomWidth: 1,
    backgroundColor: colors.surface_bright,
    padding: spacing.lg,
    alignItems: "flex-start",
    gap: 2,
    width: "46%",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  contentCategory: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  contentCategoryCard: {
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  textCategory: {
    color: colors.text_caption,
  },
  textExpence: {
    color: palette.red[500],
    fontWeight: "bold",
  },
  textExpenceCard: {
    color: palette.red[500],
    fontWeight: "bold",
    fontSize: typography.size.lg,
  },
});
