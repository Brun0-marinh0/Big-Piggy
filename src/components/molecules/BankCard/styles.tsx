import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 2,
    padding: 6,
    alignItems: "center",
    gap: 6,
    width: 130,
  },
  bankName: {
    color: colors.text_caption,
    fontSize: 14,
  },
  cash: {
    color: colors.text_caption,
    fontSize: 14,
    fontWeight: "bold",
  },
});
