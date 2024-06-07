import { createNativeStackNavigator } from "@react-navigation/native-stack";

// local imports
import DrawerNavigator from "./DrawerNavigator";
import { SettingScreen } from "./screens";

export type NativeStackParamList = {
  DrawerNavigator: undefined;
  SettingScreen: undefined;
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
    </Stack.Navigator>
  );
}

export default Navigator;
