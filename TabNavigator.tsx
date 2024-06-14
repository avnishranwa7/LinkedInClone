import { useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";

// local imports
import {
  HomeScreen,
  MyNetworkScreen,
  PostScreen,
  NotificationsScreen,
  JobsScreen,
} from "./screens";
import { Color } from "./constants/Color";
import Header from "./Header";
import { open } from "./store/BottomSheet";
import { BottomSheetModal as BottomSheetModalComponent } from "./components";
import { RootState } from "./store";

const Tab = createBottomTabNavigator();

function tabBarIcon(
  name: "Home" | "My Network" | "Post" | "Notifications" | "Jobs",
  color: string,
  size: number
) {
  if (name === "Home")
    return <Ionicons name="home" size={size} color={color} />;
  if (name === "My Network")
    return <Ionicons name="people-sharp" size={size} color={color} />;
  if (name === "Post")
    return <Ionicons name="add-circle" size={size} color={color} />;
  if (name === "Notifications")
    return <Ionicons name="notifications-sharp" size={size} color={color} />;
  return <Ionicons name="bag" size={size} color={color} />;
}

function TabNavigator() {
  const dispatch = useDispatch();
  const isOpen =
    useSelector((state: RootState) => state.bottomSheet.content) ===
    "PostScreen";

  const header = useCallback(
    (navigation: any) => (
      <Header openDrawer={() => navigation.openDrawer("DrawerNavigator")} />
    ),
    []
  );

  return (
    <>
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          tabBarActiveTintColor: Color.black,
          header: () => header(navigation),
        })}
        sceneContainerStyle={{ backgroundColor: Color.grey[200] }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => tabBarIcon("Home", color, size),
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="MyNetworkScreen"
          component={MyNetworkScreen}
          options={{
            tabBarIcon: ({ color, size }) =>
              tabBarIcon("My Network", color, size),
            tabBarLabel: "My Network",
          }}
        />
        <Tab.Screen
          name="PostScreen"
          component={PostScreen}
          options={{
            tabBarIcon: ({ color, size }) => tabBarIcon("Post", color, size),
            tabBarLabel: "Post",
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              dispatch(open("PostScreen"));
            },
          }}
        />
        <Tab.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ color, size }) =>
              tabBarIcon("Notifications", color, size),
            tabBarLabel: "Notifications",
          }}
        />
        <Tab.Screen
          name="JobsScreen"
          component={JobsScreen}
          options={{
            tabBarIcon: ({ color, size }) => tabBarIcon("Jobs", color, size),
            tabBarLabel: "Jobs",
          }}
        />
      </Tab.Navigator>
      {isOpen && (
        <BottomSheetModalComponent
          snapPoints={["100%", "100%"]}
          innerContent={PostScreen}
          containerStyle={{ flex: 1 }}
        />
      )}
    </>
  );
}

export default TabNavigator;
