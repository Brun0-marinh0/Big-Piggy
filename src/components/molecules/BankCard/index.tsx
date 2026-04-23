import { Account } from "@/src/data";
import { Text, View } from "react-native";
import { CategoryIcons } from "../../atoms/CategoryIcons";
import { styles } from "./styles";

export function BankCard({ account }: { account: Account }) {
  return (
    <View style={styles.cardContainer}>
      <CategoryIcons icon={account.icon} color={account.color} />
      <View>
        <Text style={styles.bankName}>{account.name}</Text>
        <Text style={styles.cash}>R$ {account.balance.toFixed(2)}</Text>
      </View>
    </View>
  );
}
