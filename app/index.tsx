import { Navbar } from "@/src/components/molecules/Navbar";
import { DraggableExpenceModal } from "@/src/components/organisms/DraggableExpenceModal";
import { FinancialSummary } from "@/src/components/organisms/FinancialSummary";
import { TopExpenceCategories } from "@/src/components/organisms/TopExpenceCategories";
import { TotalBalanceContent } from "@/src/components/organisms/TotalBalanceContent";
import { db } from "@/src/data";
import { spacing } from "@/src/styles";
import { StyleSheet, View } from "react-native";

const balance = db.getTotalBalance();
const totalExpense = db.getTotalExpense();
const totalIncome = db.getTotalIncome();

export default function Index() {
  return (
    <View style={styles.container}>
      <Navbar username="Bruno" />
      <TotalBalanceContent totalBalance={balance} />
      <FinancialSummary totalExpense={totalExpense} totalIncome={totalIncome} />
      <TopExpenceCategories />
      <DraggableExpenceModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.sm,
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});
