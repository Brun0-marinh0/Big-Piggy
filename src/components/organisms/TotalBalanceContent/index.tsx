import { stylesMain } from "@/App.styles";
import { colors } from "@/src/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BankCardsContent } from "../BankCardsContent";
import { styles } from "./styles";

export function TotalBalanceContent({
  totalBalance,
}: {
  totalBalance: number;
}) {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <LinearGradient
      colors={["#181818", "#181818", "#22C26C"]}
      locations={[0, 0.5, 1.0]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.card}
    >
      <View>
        <Text style={stylesMain.textCaption}>SALDO TOTAL</Text>
        <View style={styles.balanceRow}>
          <Text style={[stylesMain.textSubtitle, styles.balanceAmount]}>
            {showBalance ? `R$ ${totalBalance.toFixed(2)}` : "****"}
          </Text>
          <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
            <Ionicons
              name={showBalance ? "eye" : "eye-off"}
              size={20}
              color={colors.text_subtitle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <BankCardsContent />
    </LinearGradient>
  );
}
