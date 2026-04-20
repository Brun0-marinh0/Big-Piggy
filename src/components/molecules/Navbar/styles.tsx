import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  textSubtitle: {
    color: colors.text_subtitle,
  },
  textCaption: {
    color: colors.text_caption,
  },
});
