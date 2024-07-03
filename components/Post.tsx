import { FC, useMemo, useState } from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import ViewMoreText from "react-native-view-more-text";
import { useDispatch } from "react-redux";

// local imports
import { Color } from "../constants/Color";
import { open } from "../store/BottomSheet";
import { remove } from "../store/posts";
import { USERS } from "../DATA";
import LikedButton from "./LikedButton";
import { Post as PostType, connectionType } from "./types";
import RemovedPost from "./RemovedPost";
import UserAvatar from "./UserAvatar";

function getConnectionString(type: connectionType) {
  if (type === "comment") return "commented on this";
  if (type === "support") return "supports this";
  if (type === "contributed") return "contributed to this";
  if (type === "liked") return "liked this";

  return "finds this funny";
}

interface Props {
  post: PostType;
}

const Post: FC<Props> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const dispatch = useDispatch();

  const user = useMemo(
    () => USERS.find((user) => user.id === post.userId),
    [post]
  );

  const connectionUser = USERS.find(
    (user) => user.id === post.connection?.userId
  );

  function openModal() {
    dispatch(open({ content: user?.name, screen: "HomeScreen" }));
  }

  if (removed)
    return (
      <RemovedPost
        remove={() => dispatch(remove(post.id))}
        undo={() => setRemoved(false)}
      />
    );

  return (
    <View style={styles.post}>
      {post.connection && (
        <View style={styles.connectionView}>
          <UserAvatar size={26} image={connectionUser?.imageUri} />
          <Text style={{ marginLeft: 8, fontWeight: "500" }}>
            {connectionUser?.name}
          </Text>
          <Text> {getConnectionString(post.connection.type)}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end",
              gap: 16,
            }}
          >
            <Pressable
              onPress={openModal}
              style={({ pressed }) => [
                pressed && styles.pressable,
                { padding: 4 },
              ]}
            >
              <Entypo
                name="dots-three-vertical"
                size={14}
                color={Color.grey[800]}
              />
            </Pressable>
            <Pressable
              onPress={() => setRemoved(true)}
              style={({ pressed }) => pressed && styles.pressable}
            >
              <Entypo name="cross" size={24} color={Color.grey[800]} />
            </Pressable>
          </View>
        </View>
      )}
      <Pressable
        style={({ pressed }) => [
          pressed && styles.pressable,
          styles.profileView,
        ]}
      >
        <View style={styles.userView}>
          <UserAvatar size={46} image={user?.imageUri} />
          <View
            style={{
              paddingTop: 4,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              {user?.name}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                fontSize: 12,
                color: Color.grey[600],
              }}
            >
              {user?.bio}
            </Text>
          </View>
          {!post.connection && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={openModal}
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
                onPress={() => setRemoved(true)}
                style={({ pressed }) => [
                  pressed && styles.pressable,
                  { padding: 8 },
                ]}
              >
                <Entypo name="cross" size={24} color={Color.grey[800]} />
              </Pressable>
            </View>
          )}
        </View>
      </Pressable>
      <View style={styles.contentView}>
        {seeMore ? (
          <Text style={{ fontSize: 14, color: Color.black }}>
            {post.content}
          </Text>
        ) : (
          <ViewMoreText
            numberOfLines={3}
            renderViewLess={() => <Text></Text>}
            renderViewMore={(onPress) => (
              <Text
                onPress={() => {
                  onPress();
                  setSeeMore(true);
                }}
                style={{ color: Color.grey[700] }}
              >
                see more
              </Text>
            )}
          >
            <Text style={{ fontSize: 14, color: Color.black }}>
              {post.content}
            </Text>
          </ViewMoreText>
        )}
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
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image} />
      )}
      <View
        style={[
          styles.countView,
          { paddingVertical: post.likesCount > 0 ? 0 : 12 },
        ]}
      >
        {post.likesCount > 0 && (
          <Pressable
            style={({ pressed }) => [
              pressed && { backgroundColor: Color.blue[50] },
              styles.likeView,
            ]}
          >
            <LikedButton />
            <Text style={styles.countText}>{post.likesCount}</Text>
          </Pressable>
        )}
        <View style={styles.commentView}>
          {post.commentsCount > 0 && (
            <Pressable
              style={({ pressed }) => [
                pressed && { backgroundColor: Color.blue[50] },
              ]}
            >
              <Text style={styles.countText}>
                {post.commentsCount} comments
              </Text>
            </Pressable>
          )}
          {post.repostsCount > 0 && (
            <Text style={[styles.countText, { fontSize: 4 }]}>{"\u2B24"}</Text>
          )}
          {post.repostsCount > 0 && (
            <Pressable
              style={({ pressed }) => [
                pressed && { backgroundColor: Color.blue[50] },
              ]}
            >
              <Text style={styles.countText}>{post.repostsCount} reposts</Text>
            </Pressable>
          )}
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
  },
  connectionView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: Color.grey[300],
    paddingVertical: 8,
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
  image: {
    width: "100%",
    height: 300,
  },
  countView: {
    flexDirection: "row",
    marginHorizontal: 12,
    alignItems: "center",
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
  commentView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    flex: 1,
    justifyContent: "flex-end",
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
