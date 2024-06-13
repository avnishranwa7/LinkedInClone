import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

// local imports
import Post from "../../components/Post";
import { Color } from "../../constants/Color";
import { Posts } from "./Data";

const Home = () => {
  const [posts, setPosts] = useState(Posts);

  const removePost = useCallback((id: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.home}>
      {posts.length === 0 && (
        <Text style={styles.noPostText}>No posts to show</Text>
      )}
      {posts.map((post) => (
        <Post key={post.id} post={post} remove={removePost} />
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {},
  noPostText: {
    fontSize: 20,
    fontWeight: "500",
    color: Color.grey[600],
    marginTop: 12,
    alignSelf: "center",
  },
});
