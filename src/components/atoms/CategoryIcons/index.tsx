import * as PhosphorIcons from "phosphor-react-native";
import { IconProps } from "phosphor-react-native";
import { View } from "react-native";
import { styles } from "./styles";

type CategoryIconsProps = {
  icon: string;
  color: string;
  typeTopExpense?: boolean;
};

export function CategoryIcons({
  icon,
  color,
  typeTopExpense,
}: CategoryIconsProps) {
  const Icon = (
    PhosphorIcons as unknown as Record<string, React.ElementType<IconProps>>
  )[icon];

  if (!Icon) return null;

  return (
    <View
      style={[
        typeTopExpense ? styles.cardIconTopExpense : styles.cardIcon,
        { backgroundColor: color + "33" },
      ]}
    >
      <Icon size={typeTopExpense ? 18 : 26} weight="fill" color={color} />
    </View>
  );
}
