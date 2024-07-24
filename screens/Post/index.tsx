import { useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

// local imports
import { Color } from "../../constants/Color";
import { RootState } from "../../store";
import { Post as PostType } from "../../components/types";
import { add } from "../../store/posts";
import { close } from "../../store/BottomSheet";

const Post = () => {
  const [input, setInput] = useState("");

  const user = useSelector((state: RootState) => state.user.profile);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(close());
  }

  function createPost() {
    const id = Math.random().toString(16).slice(2);
    const post: PostType = {
      id,
      userId: user.id,
      content: input,
      likesCount: 0,
      commentsCount: 0,
      repostsCount: 0,
    };
    dispatch(add(post));
    closeModal();
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable
          onPress={closeModal}
          style={({ pressed }) => [
            styles.iconButton,
            pressed && styles.pressed,
          ]}
        >
          <AntDesign name="close" size={24} color={Color.grey[800]} />
        </Pressable>
        <View style={styles.profile}>
          <Avatar
            size={33}
            rounded
            icon={{ name: "user", type: "font-awesome", color: Color.black }}
            containerStyle={{ backgroundColor: Color.grey[200] }}
            {...(user.imageUri && { source: { uri: user.imageUri } })}
          />
          <Text
            style={{ color: Color.grey[600], fontSize: 16, fontWeight: "500" }}
          >
            Anyone
          </Text>
          <FontAwesome name="caret-down" size={16} color={Color.grey[600]} />
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.iconButton,
            pressed && styles.pressed,
          ]}
        >
          <MaterialCommunityIcons
            name="clock-outline"
            size={24}
            color={Color.grey[800]}
          />
        </Pressable>
        <Pressable
          onPress={createPost}
          disabled={!input}
          style={[styles.button, !input && styles.disabledButton]}
        >
          <Text
            style={[styles.buttonText, !input && styles.disabledButtonText]}
          >
            Post
          </Text>
        </Pressable>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Share your thoughts..."
          value={input}
          onChangeText={(text) => setInput(text)}
          multiline
          style={styles.input}
        />
      </View>
      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressed,
            styles.iconButton,
            { padding: 8 },
          ]}
        >
          <FontAwesome name="image" size={20} color={Color.grey[800]} />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressed,
            styles.iconButton,
          ]}
        >
          <AntDesign name="plus" size={22} color={Color.grey[800]} />
        </Pressable>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  button: {
    backgroundColor: Color.blue[700],
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  disabledButton: {
    backgroundColor: Color.grey[300],
  },
  buttonText: {
    color: Color.white,
    fontSize: 16,
    fontWeight: "500",
  },
  disabledButtonText: {
    color: Color.grey[500],
  },
  inputView: {
    flex: 1,
  },
  input: {
    fontSize: 18,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 16,
  },
  iconButton: {
    padding: 4,
    borderRadius: 50,
  },
  pressed: {
    backgroundColor: Color.grey[200],
  },
});
