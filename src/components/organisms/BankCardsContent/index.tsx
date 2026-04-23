import { Account, accounts } from "@/src/data";
import { ScrollView } from "react-native";
import { BankCard } from "../../molecules/BankCard";
import { styles } from "./styles";

export function BankCardsContent() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {accounts.map((account: Account) => (
        <BankCard key={account.id} account={account} />
      ))}
    </ScrollView>
  );
}
