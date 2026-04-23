import { alerts } from "@/src/data";
import { Text, View } from "react-native";
import { ExpenseAlert } from "../../molecules/ExpenseAlert";
import { styles } from "./styles";

export function FinancialSummary({
  totalExpense,
  totalIncome,
}: {
  totalExpense: number;
  totalIncome: number;
}) {
  return (
    <>
      <View style={styles.gridContainer}>
        <View style={[styles.cardContainer, styles.wonCard]}>
          <Text style={styles.bankName}>Ganhos</Text>
          <Text style={styles.textWon}>+ R$ {totalIncome.toFixed(2)}</Text>
        </View>
        <View style={[styles.cardContainer, styles.lostCard]}>
          <Text style={styles.bankName}>Perdas</Text>
          <Text style={styles.textLost}>- R$ {-totalExpense.toFixed(2)}</Text>
        </View>
      </View>
      <ExpenseAlert alert={alerts[0]} />
    </>
  );
}
