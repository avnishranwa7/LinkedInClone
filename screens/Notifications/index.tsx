import { useCallback, useState, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// local imports
import NOTIFICATIONS from "../../DATA/Notifications";
import NotificationCard from "../../components/NotificationCard";
import { BottomSheetModal } from "../../components";
import { open } from "../../store/BottomSheet";
import { RootState } from "../../store";
import NotificationHeader from "./Header";

const Notifications = () => {
  const [modalContent, setModalContent] = useState<JSX.Element>(<View></View>);

  const dispatch = useDispatch();
  const screen = useSelector((state: RootState) => state.bottomSheet.screen);

  const snapPoints = useMemo(() => [130, 260], []);
  const openModal = useCallback(
    () => dispatch(open({ screen: "NotificationScreen", content: "" })),
    []
  );

  const setContent = useCallback(
    (content: JSX.Element) => setModalContent(content),
    []
  );

  return (
    <>
      <View>
        <NotificationHeader />
        <ScrollView>
          {NOTIFICATIONS.map((notification) => (
            <NotificationCard
              key={notification.id}
              openModal={openModal}
              notification={notification}
              setModalContent={setContent}
            />
          ))}
        </ScrollView>
      </View>
      {screen === "NotificationScreen" && (
        <BottomSheetModal snapPoints={snapPoints} innerContent={modalContent} />
      )}
    </>
  );
};

export default Notifications;
