import { stylesMain } from "@/App.styles";
import { palette } from "@/src/styles/colors";
import { LinearGradient } from "expo-linear-gradient";
import { EyeClosedIcon, EyeIcon } from "phosphor-react-native";
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
  const iconSize = 23;
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
          <TouchableOpacity
            style={styles.balanceToggle}
            onPress={() => setShowBalance(!showBalance)}
          >
            {showBalance ? (
              <EyeIcon
                size={iconSize}
                color={palette.green[700]}
                weight="bold"
              />
            ) : (
              <EyeClosedIcon
                size={iconSize}
                color={palette.green[700]}
                weight="bold"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <BankCardsContent />
    </LinearGradient>
  );
}
