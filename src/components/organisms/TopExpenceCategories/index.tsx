import { colors } from "@/src/styles/colors";
import { CaretRightIcon, InfoIcon } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { ExpenceCategoriesCard } from "../../molecules/ExpenceCategoriesCard";
import { styles } from "./styles";

import { db } from "@/src/data";
import React from "react";
import { TopExpenceMoreDetails } from "../TopExpenceMoreDetails";

const topCategories = db.getTopExpenseCategories();

export function TopExpenceCategories() {
  const [showMoreDetails, setShowMoreDetails] = React.useState(false);
  return (
    <>
      <View style={styles.header}>
        <View style={styles.contentInform}>
          <Text style={styles.textSubtitle}>Onde você mais gasta</Text>
          <TouchableOpacity>
            <InfoIcon size={20} color={colors.text_caption} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.contentMoreDetails}
          onPress={() => setShowMoreDetails(!showMoreDetails)}
        >
          <Text style={styles.textMoreDetails}>ver mais </Text>
          <CaretRightIcon size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentCategories}>
        {topCategories.slice(0, 3).map((category) => (
          <ExpenceCategoriesCard
            key={category.category.id}
            data={category}
            styleCard={false}
          />
        ))}
      </View>
      {showMoreDetails && (
        <TopExpenceMoreDetails
          data={topCategories}
          onClose={() => setShowMoreDetails(false)}
        />
      )}
    </>
  );
}
