import { Alert } from "@/src/data/types";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const ExpenseAlert = ({ alert }: { alert: Alert }) => {
  return (
    <View style={styles.expenseAlertContent}>
      <Text style={styles.textSubtitleAlert}>Atenção</Text>
      <Text style={styles.textCaptionAlert}>{alert.message}</Text>
    </View>
  );
};
