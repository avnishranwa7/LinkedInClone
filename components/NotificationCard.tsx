import { FC, useCallback, useMemo } from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

// local imports
import { Color } from "../constants/Color";
import { POSTS, USERS } from "../DATA";
import { NotificationType } from "./types";
import UserAvatar from "./UserAvatar";

interface Props {
  notification: NotificationType;
  openModal: () => void;
  setModalContent: (content: JSX.Element) => void;
}

const Notification: FC<Props> = ({
  notification,
  openModal,
  setModalContent,
}) => {
  const user = USERS.find((user) => user.id === notification.userId);
  const post = POSTS.find((post) => post.id === notification.postId);

  const description = useMemo(() => {
    if (notification.type === "posted") {
      return (
        <Text numberOfLines={3} style={styles.descriptionView}>
          <Text style={styles.userName}>{user?.name}</Text>
          <Text> posted: </Text>
          <Text>{post?.content}</Text>
        </Text>
      );
    }
  }, [user?.id, post?.id]);

  const BaseModalView = useCallback(
    (content: Array<JSX.Element>) => (
      <View style={styles.modalView}>
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressable,
            styles.modalItem,
          ]}
        >
          <MaterialIcons name="delete" size={28} color="black" />
          <Text style={styles.modalItemText}>Delete notification</Text>
        </Pressable>
        {content.map((item) => (
          <>{item}</>
        ))}
      </View>
    ),
    []
  );

  const modalContent = useMemo(() => {
    const content: Array<JSX.Element> = [];
    if (notification.type === "posted") {
      content.push(
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressable,
            styles.modalItem,
          ]}
        >
          <AntDesign name="dislike2" size={24} color="black" />
          <Text style={styles.modalItemText}>Show less like this</Text>
        </Pressable>
      );
      content.push(
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressable,
            styles.modalItem,
          ]}
        >
          <Ionicons name="notifications-off-outline" size={24} color="black" />
          <Text
            style={styles.modalItemText}
          >{`Turn off notifications about ${user?.name}`}</Text>
        </Pressable>
      );
      content.push(
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressable,
            styles.modalItem,
          ]}
        >
          <Ionicons name="notifications-off-outline" size={24} color="black" />
          <Text style={styles.modalItemText}>
            Turn off notifications about updates from your network
          </Text>
        </Pressable>
      );
    }
    return BaseModalView(content);
  }, [notification.userId, notification.postId]);

  const openBottomSheet = useCallback(() => {
    setModalContent(modalContent);
    openModal();
  }, [modalContent]);

  return (
    <Pressable style={styles.notification}>
      <UserAvatar size={50} image={user?.imageUri} />
      {description}
      <Pressable
        onPress={openBottomSheet}
        style={({ pressed }) => [pressed && styles.pressable, styles.iconView]}
      >
        <Text style={styles.time}>{notification.time}</Text>
        <Entypo name="dots-three-vertical" size={14} color={Color.grey[800]} />
      </Pressable>
    </Pressable>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notification: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 16,
    paddingLeft: 24,
    paddingRight: 12,
    borderBottomWidth: 1,
    borderColor: Color.grey[300],
    backgroundColor: Color.white,
  },
  descriptionView: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  userName: {
    fontWeight: "700",
  },
  time: {
    fontSize: 12,
    color: Color.grey[600],
  },
  iconView: {
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  pressable: {
    backgroundColor: Color.grey[100],
  },
  modalView: {
    paddingVertical: 8,
    gap: 4,
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalItemText: {
    fontSize: 16,
    color: Color.grey[600],
    fontWeight: "500",
  },
});
