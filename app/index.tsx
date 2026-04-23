import { Navbar } from "@/src/components/molecules/Navbar";
import { FinancialSummary } from "@/src/components/organisms/FinancialSummary";
import { TotalBalanceContent } from "@/src/components/organisms/TotalBalanceContent";
import { db } from "@/src/data";
import { View } from "react-native";

const balance = db.getTotalBalance();

export default function Index() {
  return (
    <View>
      <Navbar username="Bruno" />
      <TotalBalanceContent totalBalance={balance} />
      <FinancialSummary />
    </View>
  );
}
