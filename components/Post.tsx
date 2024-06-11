import { FC, useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Avatar } from "@rneui/themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

// local imports
import { Color } from "../constants/Color";
import LikedButton from "./LikedButton";
import { Post as PostType } from "./types";

interface Props {
  post: PostType;
}

const Post: FC<Props> = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.post}>
      <Pressable
        style={({ pressed }) => [
          pressed && styles.pressable,
          styles.profileView,
        ]}
      >
        <View style={styles.userView}>
          <Avatar
            size={46}
            rounded
            icon={{ name: "user", type: "font-awesome", color: Color.black }}
            containerStyle={{ backgroundColor: Color.grey[200] }}
          />
          <View
            style={{
              paddingTop: 4,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              {post.author.name}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                fontSize: 12,
                color: Color.grey[600],
              }}
            >
              {post.author.bio}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => [
                pressed && styles.pressable,
                { padding: 14 },
              ]}
            >
              <Entypo
                name="dots-three-vertical"
                size={14}
                color={Color.grey[800]}
              />
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                pressed && styles.pressable,
                { padding: 8 },
              ]}
            >
              <Entypo name="cross" size={24} color={Color.grey[800]} />
            </Pressable>
          </View>
        </View>
      </Pressable>
      <View style={styles.contentView}>
        <Text style={{ fontSize: 14, color: Color.black }}>{post.content}</Text>
      </View>
      <View style={styles.tagsView}>
        {post.tags?.map((tag) => (
          <Pressable
            key={tag.id}
            style={({ pressed }) => [
              pressed && { backgroundColor: Color.blue[200] },
            ]}
          >
            <Text style={styles.tag}>#{tag.tag}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.countView}>
        <Pressable
          style={({ pressed }) => [
            pressed && { backgroundColor: Color.blue[50] },
            styles.likeView,
          ]}
        >
          <LikedButton />
          <Text style={styles.countText}>{post.likesCount}</Text>
        </Pressable>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Pressable
            style={({ pressed }) => [
              pressed && { backgroundColor: Color.blue[50] },
            ]}
          >
            <Text style={styles.countText}>{post.commentsCount} comments</Text>
          </Pressable>
          <Text style={[styles.countText, { fontSize: 4 }]}>{"\u2B24"}</Text>
          <Pressable
            style={({ pressed }) => [
              pressed && { backgroundColor: Color.blue[50] },
            ]}
          >
            <Text style={styles.countText}>{post.repostsCount} reposts</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.actionsView}>
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressable,
            styles.iconButton,
          ]}
          onPress={() => setLiked((prev) => !prev)}
        >
          {liked ? (
            <LikedButton />
          ) : (
            <AntDesign name="like2" size={20} color="black" />
          )}
          <Text
            style={[
              styles.iconText,
              { color: liked ? Color.blue[800] : Color.black },
            ]}
          >
            Like
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressable,
            styles.iconButton,
          ]}
        >
          <MaterialIcons name="comment" size={20} color="black" />
          <Text style={styles.iconText}>Comment</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressable,
            styles.iconButton,
          ]}
        >
          <AntDesign name="retweet" size={20} color="black" />
          <Text style={styles.iconText}>Repost</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressable,
            styles.iconButton,
          ]}
        >
          <FontAwesome name="send" size={16} color="black" />
          <Text style={styles.iconText}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    backgroundColor: Color.white,
    marginTop: 8,
  },
  userView: {
    flexDirection: "row",
    gap: 8,
  },
  profileView: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  contentView: {
    marginHorizontal: 12,
  },
  tagsView: {
    flexDirection: "row",
    margin: 12,
    gap: 3,
    flexWrap: "wrap",
  },
  tag: {
    color: Color.blue[800],
    fontWeight: "700",
  },
  countView: {
    flexDirection: "row",
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  likeView: {
    flexDirection: "row",
    paddingLeft: 4,
    paddingRight: 24,
    paddingVertical: 12,
    gap: 4,
    width: 100,
    alignItems: "center",
  },
  countText: {
    fontSize: 12,
    color: Color.grey[700],
  },
  actionsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: Color.grey[300],
    marginHorizontal: 12,
  },
  iconButton: {
    paddingHorizontal: 24,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 12,
    fontWeight: "500",
  },
  pressable: {
    backgroundColor: Color.grey[100],
  },
});
