import { StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

// local imports
import { Color } from "../constants/Color";

const LikedButton = () => {
  return (
    <View style={styles.button}>
      <AntDesign name="like2" size={12} color="black" />
    </View>
  );
};

export default LikedButton;

const styles = StyleSheet.create({
  button: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: Color.blue[300],
  },
});
