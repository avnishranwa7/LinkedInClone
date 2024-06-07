import { Pressable, StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Avatar } from "@rneui/themed";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// local imports
import TabNavigator from "./TabNavigator";
import { Color } from "./constants/Color";
import { NativeStackParamList } from "./Navigator";

const Drawer = createDrawerNavigator();

interface Props {
  closeDrawer: () => void;
}

function drawerContent({ closeDrawer }: Props) {
  const navigation = useNavigation<NavigationProp<NativeStackParamList>>();

  function navigate(screen: keyof NativeStackParamList) {
    closeDrawer();
    navigation.navigate(screen);
  }

  return (
    <View style={drawerContentStyles.drawer}>
      <View style={drawerContentStyles.header}>
        <Avatar
          size={65}
          rounded
          icon={{ name: "user", type: "font-awesome", color: Color.black }}
          containerStyle={{
            backgroundColor: Color.grey[100],
            position: "relative",
            top: "70%",
            left: 24,
          }}
        />
      </View>
      <View style={drawerContentStyles.infoView}>
        <Text style={drawerContentStyles.nameText}>Avnish Ranwa</Text>
        <Text>Software Engineer | 3 ★ CodeChef</Text>
        <Text style={drawerContentStyles.greyText}>
          Jaipur, Rajasthan, India
        </Text>
        <Text>Softsensor.ai</Text>
      </View>
      <View style={drawerContentStyles.profileView}>
        <Pressable
          style={({ pressed }) => [
            pressed && drawerContentStyles.pressable,
            {
              flexDirection: "row",
              gap: 5,
              paddingHorizontal: 24,
              paddingVertical: 12,
            },
          ]}
        >
          <Text style={drawerContentStyles.boldNumber}>61</Text>
          <Text style={drawerContentStyles.greyText}>profile viewers</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            pressed && drawerContentStyles.pressable,
            {
              flexDirection: "row",
              gap: 5,
              paddingHorizontal: 24,
              paddingVertical: 12,
            },
          ]}
        >
          <Text style={drawerContentStyles.boldNumber}>44</Text>
          <Text style={drawerContentStyles.greyText}>post impressions</Text>
        </Pressable>
      </View>
      <View style={drawerContentStyles.titleView}>
        <Pressable
          style={({ pressed }) => [pressed && drawerContentStyles.pressable]}
        >
          <Text style={drawerContentStyles.title}>Saved posts</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [pressed && drawerContentStyles.pressable]}
        >
          <Text style={drawerContentStyles.title}>Groups</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [pressed && drawerContentStyles.pressable]}
        >
          <Text style={drawerContentStyles.title}>Games</Text>
        </Pressable>
      </View>
      <View style={drawerContentStyles.settingView}>
        <Pressable
          style={({ pressed }) => [pressed && drawerContentStyles.pressable]}
        >
          <Text style={drawerContentStyles.settingTitle}>Premium features</Text>
        </Pressable>
        <Pressable
          onPress={() => navigate("SettingScreen")}
          style={({ pressed }) => [pressed && drawerContentStyles.pressable]}
        >
          <Text style={drawerContentStyles.settingTitle}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) =>
        drawerContent({ closeDrawer: navigation.closeDrawer })
      }
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

const drawerContentStyles = StyleSheet.create({
  drawer: {
    gap: 20,
    flex: 1,
  },
  header: {
    backgroundColor: Color.blue[200],
    height: 70,
  },
  infoView: {
    gap: 12,
    paddingHorizontal: 24,
    marginTop: 36,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "600",
  },
  greyText: {
    color: Color.grey[500],
  },
  boldNumber: {
    fontWeight: "500",
  },
  profileView: {
    borderColor: Color.grey[300],
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  titleView: {
    flex: 1,
    gap: 6,
  },
  title: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 20,
    fontWeight: "600",
  },
  settingView: {
    borderColor: Color.grey[300],
    borderTopWidth: 1,
  },
  settingTitle: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 17,
    fontWeight: "600",
  },
  pressable: {
    backgroundColor: Color.grey[100],
  },
});
