import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textSubtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.text_caption,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  contentInform: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  textMoreDetails: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "500",
    flexDirection: "row",
  },
  contentMoreDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentCategories: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
  },
});
