import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navbar: {
    flexDirection: "column",
  },
  textSubtitle: {
    color: colors.text_subtitle,
    fontSize: 16,
  },
  textCaption: {
    color: colors.text_caption,
    fontSize: 11,
  },
});
