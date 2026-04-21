import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: 10,
    paddingRight: 0,
    borderColor: colors.borderColor,
    borderWidth: 1,
    gap: 20,
    marginTop: 10,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
