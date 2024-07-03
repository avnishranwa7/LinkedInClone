import { useMemo } from "react";
import { ScrollView, StyleSheet, Text, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";

// local imports
import { BottomSheetModal, Post } from "../../components";
import { Color } from "../../constants/Color";
import { RootState } from "../../store";

const Home = () => {
  const content = useSelector((state: RootState) => state.bottomSheet.content);
  const screen = useSelector((state: RootState) => state.bottomSheet.screen);
  const posts = useSelector((state: RootState) => state.posts.posts);

  const snapPoints = useMemo(() => [130, 280], []);
  const innerContent = useMemo(
    () => (
      <>
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
      </>
    ),
    [content]
  );

  return (
    <>
      <ScrollView contentContainerStyle={styles.home}>
        {posts.length === 0 && (
          <Text style={styles.noPostText}>No posts to show</Text>
        )}
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
      {screen === "HomeScreen" && content !== "" && (
        <BottomSheetModal snapPoints={snapPoints} innerContent={innerContent} />
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    paddingVertical: 8,
    gap: 8,
  },
  noPostText: {
    fontSize: 20,
    fontWeight: "500",
    color: Color.grey[600],
    marginTop: 12,
    alignSelf: "center",
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
