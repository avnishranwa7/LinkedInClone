import { ScrollView } from "react-native";

// local imports
import Post from "../../components/Post";
import { Posts } from "./Data";

const Home = () => {
  return (
    <ScrollView>
      {Posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

export default Home;
