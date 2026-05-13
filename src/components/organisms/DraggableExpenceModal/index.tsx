import { colors, spacing } from "@/src/styles";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef } from "react";
import { Text } from "react-native";

export function DraggableExpenceModal() {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["37%", "80%"], []);

  useEffect(() => {
    const timer = setTimeout(() => ref.current?.snapToIndex(0), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      animateOnMount
      enableDynamicSizing={false}
      enableOverDrag={false}
      backgroundStyle={{ backgroundColor: "#111" }}
      handleIndicatorStyle={{ backgroundColor: colors.text_caption }}
    >
      <BottomSheetView style={{ padding: spacing.lg, gap: spacing.sm }}>
        <Text style={{ color: colors.text_title, fontSize: 18 }}>
          Atividades Recentes
        </Text>
      </BottomSheetView>
    </BottomSheet>
  );
}
