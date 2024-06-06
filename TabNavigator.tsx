import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// local imports
import { HomeScreen, MyNetwork, Post, Notifications, Jobs } from "./screens";
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
      screenOptions={{
        tabBarActiveTintColor: Color.black,
        header: () => <Header />,
      }}
      sceneContainerStyle={{ backgroundColor: Color.grey }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => tabBarIcon("Home", color, size),
        }}
      />
      <Tab.Screen
        name="My Network"
        component={MyNetwork}
        options={{
          tabBarIcon: ({ color, size }) =>
            tabBarIcon("My Network", color, size),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ color, size }) => tabBarIcon("Post", color, size),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) =>
            tabBarIcon("Notifications", color, size),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          tabBarIcon: ({ color, size }) => tabBarIcon("Jobs", color, size),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
