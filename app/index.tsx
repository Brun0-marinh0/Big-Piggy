import { Navbar } from "@/src/components/molecules/Navbar";
import { FinancialSummary } from "@/src/components/organisms/FinancialSummary";
import { TopExpenceCategories } from "@/src/components/organisms/TopExpenceCategories";
import { TotalBalanceContent } from "@/src/components/organisms/TotalBalanceContent";
import { db } from "@/src/data";
import { spacing } from "@/src/styles";
import { View } from "react-native";

const balance = db.getTotalBalance();
const totalExpense = db.getTotalExpense();
const totalIncome = db.getTotalIncome();

export default function Index() {
  return (
    <View style={{ gap: spacing.sm }}>
      <Navbar username="Bruno" />
      <TotalBalanceContent totalBalance={balance} />
      <FinancialSummary totalExpense={totalExpense} totalIncome={totalIncome} />
      <TopExpenceCategories />
    </View>
  );
}
