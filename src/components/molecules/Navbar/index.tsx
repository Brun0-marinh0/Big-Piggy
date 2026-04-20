import { Text, View } from "react-native";
import { styles } from "./styles";

export function Navbar({ username }: { username: string }, lastLoaded?: Date) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.textSubtitle}>
        {getGreeting()}: {username}.
      </Text>
      <Text style={styles.textCaption}>
        Ultima Atualização:{" "}
        {lastLoaded ? lastLoaded.toLocaleString() : "Nenhuma"}
      </Text>
    </View>
  );
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Bom-dia";
  if (hour < 18) return "Boa-tarde";
  return "Boa-noite";
};
