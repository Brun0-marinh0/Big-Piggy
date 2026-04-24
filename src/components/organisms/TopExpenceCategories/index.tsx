import { colors } from "@/src/styles/colors";
import { CaretRightIcon, InfoIcon } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { ExpenceCategoriesCard } from "../../molecules/ExpenceCategoriesCard";
import { styles } from "./styles";

export function TopExpenceCategories() {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.contentInform}>
          <Text style={styles.textSubtitle}>principais categorias</Text>
          <TouchableOpacity>
            <InfoIcon size={20} color={colors.text_caption} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.contentMoreDetails}>
          <Text style={styles.textMoreDetails}>ver mais </Text>
          <CaretRightIcon size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View>
        <ExpenceCategoriesCard />
      </View>
    </>
  );
}
