import { createNativeStackNavigator } from "@react-navigation/native-stack";

// local imports
import DrawerNavigator from "./DrawerNavigator";
import { ChatScreen, SettingScreen } from "./screens";

export type NativeStackParamList = {
  DrawerNavigator: undefined;
  SettingScreen: undefined;
  ChatScreen: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ title: "", animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
