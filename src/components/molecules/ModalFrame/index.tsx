import { Modal, View } from "react-native";
import { styles } from "./styles";

export const ModalFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <Modal transparent visible={true} animationType="fade">
      <View style={styles.containerModal}>
        <View style={styles.shapeModal}>{children}</View>
      </View>
    </Modal>
  );
};
