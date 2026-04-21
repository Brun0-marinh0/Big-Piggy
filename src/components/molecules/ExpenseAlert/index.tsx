import { Text, View } from "react-native";
import { styles } from "./styles";

export const ExpenseAlert = () => {
  return (
    <View style={styles.expenseAlertContent}>
      <Text style={styles.textSubtitleAlert}>Atenção</Text>
      <Text style={styles.textCaptionAlert}>
        Seus gastos estão 60% maiores que o normal neste mês
      </Text>
    </View>
  );
};
