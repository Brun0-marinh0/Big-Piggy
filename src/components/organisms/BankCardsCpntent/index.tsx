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
      <BankCard />
      <BankCard />
      <BankCard />
    </ScrollView>
  );
}
