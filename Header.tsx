import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

// local imports
import { Color } from "./constants/Color";

const Header = () => {
  return (
    <View style={styles.header}>
      <Avatar
        size={30}
        rounded
        icon={{ name: "user", type: "font-awesome", color: Color.black }}
        containerStyle={{ backgroundColor: Color.grey }}
      />
      <View style={styles.searchView}>
        <Ionicons name="search" size={18} color={Color.black} />
        <Text style={styles.searchText}>Search</Text>
      </View>
      <AntDesign name="message1" size={22} color="black" />
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
