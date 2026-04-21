import { Text, View } from "react-native";
import { ExpenseAlert } from "../../molecules/ExpenseAlert";
import { styles } from "./styles";

export function FinancialSummary() {
  return (
    <View>
      <View style={styles.gridContainer}>
        <View style={[styles.cardContainer, styles.wonCard]}>
          <Text style={styles.bankName}>Ganhos</Text>
          <Text style={styles.textWon}>+ R$ 1.000,5</Text>
        </View>
        <View style={[styles.cardContainer, styles.lostCard]}>
          <Text style={styles.bankName}>Perdas</Text>
          <Text style={styles.textLost}>- R$ 500,00</Text>
        </View>
      </View>
      <ExpenseAlert />
    </View>
  );
}
