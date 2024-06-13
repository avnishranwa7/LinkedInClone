import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

// local imports
import { store } from "./store/index";
import Navigator from "./Navigator";
import LoadingScreen from "./SplashScreen";
import { Color } from "./constants/Color";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return loading ? (
    <LoadingScreen />
  ) : (
    <Provider store={store}>
      <GestureHandlerRootView>
        <StatusBar barStyle="dark-content" backgroundColor={Color.white} />
        <SafeAreaView style={styles.safeView}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});
