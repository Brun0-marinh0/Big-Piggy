import { colors, palette } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: colors.background,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 2,
    padding: 6,
    gap: 3,
    flex: 1,
  },
  wonCard: {
    borderLeftColor: palette.green[600],
    borderLeftWidth: 2,
  },
  lostCard: {
    borderLeftColor: palette.red[600],
    borderLeftWidth: 2,
  },
  bankName: {
    color: colors.text_caption,
    fontSize: 14,
  },
  textWon: {
    color: palette.green[500],
    fontSize: 14,
    fontWeight: "bold",
  },
  textLost: {
    color: palette.red[500],
    fontSize: 14,
    fontWeight: "bold",
  },
});
