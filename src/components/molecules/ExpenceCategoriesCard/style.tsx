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
  contentCategory: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  textCategory: {
    color: colors.text_caption,
  },
  textExpence: {
    color: palette.red[500],
    fontWeight: "bold",
  },
});
