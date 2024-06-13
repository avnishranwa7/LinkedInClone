import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Avatar } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

// local imports
import { Color } from "./constants/Color";
import { NativeStackParamList } from "./Navigator";
import { RootState } from "./store";

interface Props {
  openDrawer: () => void;
}

const Header: FC<Props> = ({ openDrawer }) => {
  const { navigate } = useNavigation<NavigationProp<NativeStackParamList>>();

  const user = useSelector((state: RootState) => state.user.profile);

  return (
    <View style={styles.header}>
      <Pressable onPress={() => openDrawer()}>
        <Avatar
          size={33}
          rounded
          icon={{ name: "user", type: "font-awesome", color: Color.black }}
          containerStyle={{ backgroundColor: Color.grey[200] }}
          {...(user.imageUri && { source: { uri: user.imageUri } })}
        />
      </Pressable>
      <View style={styles.searchView}>
        <Ionicons name="search" size={18} color={Color.black} />
        <Text style={styles.searchText}>Search</Text>
      </View>
      <Pressable onPress={() => navigate("ChatScreen")}>
        <AntDesign name="message1" size={22} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Color.white,
  },
  searchView: {
    flexDirection: "row",
    flex: 1,
    gap: 5,
    alignItems: "center",
    backgroundColor: Color.lightestBlue,
    padding: 6,
    borderRadius: 4,
  },
  searchText: {
    fontSize: 15,
  },
});
