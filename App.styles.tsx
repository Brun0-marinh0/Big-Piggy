import { StyleSheet } from "react-native";
import { colors } from "./src/styles/colors";

export const stylesMain = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 80,
    paddingBottom: 16,
  },
  textSubtitle: {
    color: colors.text_subtitle,
    fontSize: 14,
  },
  textCaption: {
    color: colors.text_caption,
    fontSize: 11,
  },
});
