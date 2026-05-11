import { Text, View } from "react-native";
import { CategoryIcons } from "../../atoms/CategoryIcons";
import { styles } from "./style";

export function ExpenceCategoriesCard({
  data,
  styleCard,
}: {
  data: any;
  styleCard?: boolean;
}) {
  return (
    <View
      style={[
        styleCard ? styles.cardContainerStyleCard : styles.cardContainer,
        { borderBottomColor: data.category.color },
      ]}
    >
      <View
        style={styleCard ? styles.contentCategoryCard : styles.contentCategory}
      >
        <CategoryIcons icon={data.category.icon} color={data.category.color} />
        <Text style={styles.textCategory}>{data.category.name}</Text>
      </View>
      <Text style={styleCard ? styles.textExpenceCard : styles.textExpence}>
        - R$ {data.total.toFixed(2)}
      </Text>
    </View>
  );
}
