import { colors, spacing } from "@/src/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  shapeModal: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: spacing.lg,
  },
});
