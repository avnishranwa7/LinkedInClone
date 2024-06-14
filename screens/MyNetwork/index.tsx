import { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

// local imports
import { Color } from "../../constants/Color";
import GrowScreen from "./GrowScreen";
import CatchUpScreen from "./CatchUpScreen";

export type NativeStackParamList = {
  GrowScreen: undefined;
  CatchUpScreen: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

const MyNetwork = () => {
  const [screen, setScreen] = useState(0);

  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

  const navigate = useCallback(() => {
    if (screen === 0) {
      navigation.navigate("CatchUpScreen");
      setScreen(1);
      return;
    }

    navigation.navigate("GrowScreen");
    setScreen(0);
  }, [navigation, screen]);

  const header = useCallback(
    () => (
      <View style={headerStyles.header}>
        <Pressable
          onPress={screen === 1 ? navigate : null}
          style={[
            headerStyles.button,
            screen === 0 && headerStyles.activeButton,
          ]}
        >
          <Text
            style={[
              headerStyles.buttonText,
              screen === 0 && headerStyles.activeButtonText,
            ]}
          >
            Grow
          </Text>
        </Pressable>
        <Pressable
          onPress={screen === 0 ? navigate : null}
          style={[
            headerStyles.button,
            screen === 1 && headerStyles.activeButton,
          ]}
        >
          <Text
            style={[
              headerStyles.buttonText,
              screen === 1 && headerStyles.activeButtonText,
            ]}
          >
            Catch up
          </Text>
        </Pressable>
      </View>
    ),
    [navigate, screen]
  );

  return (
    <>
      {header()}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GrowScreen" component={GrowScreen} />
        <Stack.Screen name="CatchUpScreen" component={CatchUpScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MyNetwork;

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: Color.white,
  },
  activeButton: {
    borderColor: Color.green[800],
    borderBottomWidth: 2,
  },
  buttonText: {
    color: Color.grey[700],
    fontWeight: "500",
    fontSize: 16,
  },
  activeButtonText: {
    color: Color.green[800],
  },
});
