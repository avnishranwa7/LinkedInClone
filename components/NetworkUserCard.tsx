import { FC } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
} from "react-native";
import { Avatar } from "@rneui/themed";

// local imports
import { Color } from "../constants/Color";
import { Users } from "../screens/Home/Data";
import RoundedButton from "./RoundedButton";

interface Props {
  userId: string;
}

const NetworkUserCard: FC<Props> = ({ userId }) => {
  const user = Users.find((user) => user.id === userId);
  console.log(user?.backgroundImage);

  return (
    <Pressable
      android_ripple={{ color: Color.grey[200] }}
      style={({ pressed }) => [
        styles.card,
        Platform.OS !== "android" && pressed && styles.cardPressed,
      ]}
    >
      <ImageBackground
        style={styles.imageView}
        source={{ uri: user?.backgroundImage }}
        resizeMode="cover"
      >
        <Avatar
          size={90}
          rounded
          icon={{ name: "user", type: "font-awesome", color: Color.black }}
          containerStyle={{
            backgroundColor: Color.grey[200],
            position: "relative",
            top: 10,
          }}
          {...(user?.imageUri && { source: { uri: user.imageUri } })}
        />
      </ImageBackground>
      <View style={styles.bioView}>
        <Text style={styles.name}>{user?.name}</Text>
        <Text numberOfLines={2} style={styles.bio}>
          {user?.bio}
        </Text>
        <Text style={styles.connections}>58 mutual connections</Text>
      </View>
      <RoundedButton
        onPress={() => {}}
        buttonStyles={styles.button}
        textStyles={styles.buttonText}
        pressedStyles={styles.buttonPressed}
      >
        Connect
      </RoundedButton>
    </Pressable>
  );
};

export default NetworkUserCard;

const styles = StyleSheet.create({
  card: {
    width: "49%",
    borderWidth: 1,
    borderColor: Color.grey[300],
    borderRadius: 8,
    marginBottom: 6,
    alignItems: "center",
    paddingBottom: 8,
  },
  cardPressed: {
    backgroundColor: Color.grey[200],
  },
  imageView: {
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: Color.grey[300],
    height: 60,
    backgroundColor: Color.green[100],
  },
  bioView: {
    flex: 1,
    padding: 8,
    paddingTop: 52,
    alignItems: "center",
    gap: 4,
  },
  name: {
    fontWeight: "500",
    fontSize: 15,
  },
  bio: {
    color: Color.grey[600],
  },
  connections: {
    fontSize: 12,
    color: Color.grey[600],
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 40,
    borderColor: Color.blue[800],
  },
  buttonText: {
    color: Color.blue[800],
  },
  buttonPressed: {
    backgroundColor: Color.blue[50],
  },
});
