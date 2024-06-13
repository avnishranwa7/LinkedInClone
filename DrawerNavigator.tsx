import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Avatar } from "@rneui/themed";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useSelector } from "react-redux";

// local imports
import TabNavigator from "./TabNavigator";
import { Color } from "./constants/Color";
import { NativeStackParamList } from "./Navigator";
import { RootState } from "./store";

const Drawer = createDrawerNavigator();

interface Props {
  closeDrawer: () => void;
}

function drawerContent({ closeDrawer }: Props) {
  const navigation = useNavigation<NavigationProp<NativeStackParamList>>();

  const user = useSelector((state: RootState) => state.user.profile);

  function navigate(screen: keyof NativeStackParamList) {
    closeDrawer();
    navigation.navigate(screen);
  }

  return (
    <ScrollView contentContainerStyle={drawerContentStyles.drawer}>
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
          {...(user.imageUri && { source: { uri: user.imageUri } })}
        />
      </View>
      <View style={drawerContentStyles.infoView}>
        <Text numberOfLines={1} style={drawerContentStyles.nameText}>
          {user.name}
        </Text>
        {user.bio && <Text numberOfLines={1}>{user.bio}</Text>}
        {user.address && (
          <Text numberOfLines={1} style={drawerContentStyles.greyText}>
            {user.address}
          </Text>
        )}
        {user.company && <Text numberOfLines={1}>{user.company}</Text>}
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
    </ScrollView>
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
    flexGrow: 1,
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
