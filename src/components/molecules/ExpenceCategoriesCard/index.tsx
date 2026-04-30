import { Text, View } from "react-native";
import { CategoryIcons } from "../../atoms/CategoryIcons";
import { styles } from "./style";

export function ExpenceCategoriesCard({ data }: { data: any }) {
  return (
    <View
      style={[styles.cardContainer, { borderBottomColor: data.category.color }]}
    >
      <View style={styles.contentCategory}>
        <CategoryIcons
          icon={data.category.icon}
          color={data.category.color}
          typeTopExpense={true}
        />
        <Text style={styles.textCategory}>{data.category.name}</Text>
      </View>
      <Text style={styles.textExpence}>- R$ {data.total.toFixed(2)}</Text>
    </View>
  );
}
