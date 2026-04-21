import { Navbar } from "@/src/components/molecules/Navbar";
import { FinancialSummary } from "@/src/components/organisms/FinancialSummary";
import { TotalBalanceContent } from "@/src/components/organisms/TotalBalanceContent";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <Navbar username="Bruno" />
      <TotalBalanceContent totalBalance={1000.58} />
      <FinancialSummary />
    </View>
  );
}
