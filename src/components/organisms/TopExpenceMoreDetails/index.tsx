import { colors, palette } from "@/src/styles";
import { MagnifyingGlassIcon, XIcon } from "phosphor-react-native";
import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ExpenceCategoriesCard } from "../../molecules/ExpenceCategoriesCard";
import { ModalFrame } from "../../molecules/ModalFrame";
import { styles } from "./styles";

export const TopExpenceMoreDetails = ({
  data,
  onClose,
}: {
  data: any[];
  onClose: () => void;
}) => {
  const [text, onChangeText] = React.useState("");

  const filteredData = React.useMemo(
    () =>
      text.trim() === ""
        ? data
        : data.filter((cat) =>
            cat.category.name.toLowerCase().includes(text.toLowerCase()),
          ),
    [data, text],
  );

  const inputRef = useRef<TextInput>(null);

  return (
    <ModalFrame>
      <View style={styles.headerModal}>
        <Text style={styles.textHeader}>Gastos por categoria</Text>
        <TouchableOpacity onPress={onClose}>
          <XIcon size={26} color={palette.gray[200]} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputSearchContainer}>
        <TouchableOpacity onPress={() => inputRef.current?.focus()}>
          <MagnifyingGlassIcon size={25} color={palette.gray[200]} />
        </TouchableOpacity>
        <TextInput
          ref={inputRef}
          style={styles.inputSearch}
          placeholder="pesquisar categoria"
          placeholderTextColor={palette.gray[200]}
          onChangeText={onChangeText}
          value={text}
          selectionColor={colors.primary}
          onSubmitEditing={() => {}}
        />
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {filteredData.length > 0 ? (
            filteredData.map((category) => (
              <ExpenceCategoriesCard
                key={category.category.id}
                data={category}
                styleCard={true}
              />
            ))
          ) : (
            <Text style={styles.notFound}>Nenhuma categoria encontrada</Text>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </ModalFrame>
  );
};
