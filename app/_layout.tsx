import { colors } from "@/src/styles/colors";
import { Slot } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});
