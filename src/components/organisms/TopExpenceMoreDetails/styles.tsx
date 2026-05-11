import { colors, spacing, typography } from "@/src/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    paddingBottom: spacing.lg,
    marginBottom: spacing.lg,
  },
  textHeader: {
    fontSize: typography.size["2xl"],
    fontWeight: typography.weight.regular,
    color: colors.text_caption,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.lg,
    paddingTop: spacing.lg,
  },
  inputSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: spacing.sm,
    backgroundColor: colors.surface_bright,
    paddingHorizontal: spacing.md,
  },
  inputSearch: {
    flex: 1,
    color: colors.text_caption,
  },
  notFound: {
    width: "100%",
    textAlign: "center",
    color: colors.text_caption,
    fontSize: typography.size.md,
    paddingTop: spacing.lg,
  },
});
