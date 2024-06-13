import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

// local imports
import { Color } from "../constants/Color";
import { RootState } from "../store";
import { close } from "../store/BottomSheet";

const BottomSheetModalComponent = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => [130, 280], []);

  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.bottomSheet.isOpen);
  const content = useSelector((state: RootState) => state.bottomSheet.content);

  const backdropComponent = useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop enableTouchThrough={false} {...backdropProps} />
    ),
    []
  );

  useEffect(() => {
    if (open) bottomSheetModalRef.current?.present();
    else bottomSheetModalRef.current?.close();
  }, [open]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onDismiss={() => dispatch(close())}
        backdropComponent={backdropComponent}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Pressable
            style={({ pressed }) => [
              pressed && styles.pressable,
              styles.item,
              { marginLeft: 4 },
            ]}
          >
            <FontAwesome name="bookmark-o" size={24} color="black" />
            <Text style={[styles.text, { marginLeft: 4 }]}>Save</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [pressed && styles.pressable, styles.item]}
          >
            <Ionicons name="share-social" size={24} color="black" />
            <Text style={styles.text}>Share via</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [pressed && styles.pressable, styles.item]}
          >
            <FontAwesome5 name="eye-slash" size={20} color="black" />
            <Text style={styles.text}>I don't want to see this</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [pressed && styles.pressable, styles.item]}
          >
            <Ionicons name="close-circle" size={24} color="black" />
            <Text style={styles.text}>Unfollow {content}</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [pressed && styles.pressable, styles.item]}
          >
            <Ionicons name="flag" size={24} color="black" />
            <Text style={styles.text}>Report post</Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomSheetModalComponent;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  text: {
    color: Color.grey[700],
    fontWeight: "500",
  },
  pressable: {
    backgroundColor: Color.grey[100],
  },
});
