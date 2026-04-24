import { Text, View } from "react-native";
import { CategoryIcons } from "../../atoms/CategoryIcons";
import { styles } from "./style";

export function ExpenceCategoriesCard() {
  return (
    <View style={styles.cardContainer}>
      <CategoryIcons icon="CarrotIcon" color="#ffa366" />
      <View>
        <Text>Alimentação</Text>
        <Text>R$ 1.000,00</Text>
      </View>
    </View>
  );
}
