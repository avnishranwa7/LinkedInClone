import { ScrollView, StyleSheet } from "react-native";

// local imports
import Post from "../../components/Post";
import { Posts } from "./Data";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.home}>
      {Posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {},
});
