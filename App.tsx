import "react-native-gesture-handler";

import { useState } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// local imports
import Navigator from "./Navigator";
import LoadingScreen from "./SplashScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return loading ? (
    <LoadingScreen />
  ) : (
    <SafeAreaView style={styles.safeView}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
