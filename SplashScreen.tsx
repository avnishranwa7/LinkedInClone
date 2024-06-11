import { Image, StyleSheet, View } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.screen}>
      <Image source={require("./assets/logo.png")} style={styles.image} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});
