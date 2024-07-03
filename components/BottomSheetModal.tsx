import React, { FC, useCallback, useEffect, useRef } from "react";
import { StyleProp, ViewStyle } from "react-native";
import {
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";

// local imports
import { RootState } from "../store";
import { close } from "../store/BottomSheet";

interface Props {
  innerContent: JSX.Element | (() => JSX.Element);
  snapPoints?: Array<number | string>;
  containerStyle?: StyleProp<ViewStyle>;
  closeModal?: () => void;
}

const BottomSheetModalComponent: FC<Props> = ({
  snapPoints,
  innerContent,
  containerStyle,
  closeModal,
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.bottomSheet.isOpen);

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
        snapPoints={snapPoints ?? ["100%", "100%"]}
        onDismiss={() => {
          dispatch(close());
          closeModal && closeModal();
        }}
        backdropComponent={backdropComponent}
      >
        <BottomSheetScrollView
          {...(containerStyle && { contentContainerStyle: containerStyle })}
        >
          {typeof innerContent === "function" ? innerContent() : innerContent}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomSheetModalComponent;
