import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

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
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor: Color.black,
        header: () => (
          <Header openDrawer={() => navigation.openDrawer("DrawerNavigator")} />
        ),
      })}
      sceneContainerStyle={{ backgroundColor: Color.grey[100] }}
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
  );
}

export default TabNavigator;
