import { Text, View } from "react-native";
import { styles } from "./styles";

export function Navbar({ username }: { username: string }, lastLoaded: Date) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.textSubtitle}>{username}</Text>
      <Text style={styles.textCaption}>
        Ultima Atualização: {lastLoaded.toLocaleString()}
      </Text>
    </View>
  );
}
