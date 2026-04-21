import { palette } from "@/src/styles/colors";
import { PiggyBankIcon } from "phosphor-react-native";
import { View } from "react-native";
import { styles } from "./styles";

export function CategoryIcons() {
  return (
    <View style={[styles.cardIcon, { backgroundColor: palette.blue[600] }]}>
      <PiggyBankIcon size={26} weight="fill" color={palette.blue[400]} />
    </View>
  );
}
