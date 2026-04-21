import { palette } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  expenseAlertContent: {
    backgroundColor: "#ff721a36",
    padding: 8,
    borderRadius: 4,
  },
  textSubtitleAlert: {
    color: palette.orange[400],
    fontWeight: "bold",
  },
  textCaptionAlert: {
    color: palette.orange[400],
    fontWeight: "light",
  },
});
