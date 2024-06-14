import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// local imports
import { Color } from "../../constants/Color";

const GrowScreen = () => {
  return (
    <View style={styles.screen}>
      <Pressable
        android_ripple={{ color: Color.grey[200] }}
        style={({ pressed }) => [
          styles.view,
          pressed && Platform.OS !== "android" && styles.pressed,
          styles.rowView,
        ]}
      >
        <Text style={[styles.invitationText]}>Invitations (0)</Text>
        <FontAwesome6 name="arrow-right" size={15} color={Color.grey[700]} />
      </Pressable>
      <Pressable
        android_ripple={{ color: Color.grey[200] }}
        style={({ pressed }) => [
          styles.view,
          pressed && Platform.OS !== "android" && styles.pressed,
          styles.rowView,
        ]}
      >
        <Text style={[styles.invitationText]}>Manage my network</Text>
        <FontAwesome6 name="arrow-right" size={15} color={Color.grey[700]} />
      </Pressable>
      <View style={[styles.view]}></View>
    </View>
  );
};

export default GrowScreen;

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 8,
    gap: 8,
  },
  view: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: Color.white,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  invitationText: {
    fontWeight: "500",
    fontSize: 16,
  },
  pressed: {
    backgroundColor: Color.grey[200],
  },
});
