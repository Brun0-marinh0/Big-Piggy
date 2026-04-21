import { Text, View } from "react-native";
import { CategoryIcons } from "../../atoms/CategoryIcons";
import { styles } from "./styles";

export function BankCard() {
  return (
    <View style={styles.cardContainer}>
      <CategoryIcons />
      <View>
        <Text style={styles.bankName}>Bank</Text>
        <Text style={styles.cash}>R$ 500</Text>
      </View>
    </View>
  );
}
