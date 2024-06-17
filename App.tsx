import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

// local imports
import { store } from "./store/index";
import Navigator from "./Navigator";
import { Color } from "./constants/Color";

export default function App() {
  return (
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
