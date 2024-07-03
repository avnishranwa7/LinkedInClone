import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// local imports
import { RoundedButton } from "../../components";
import { Color } from "../../constants/Color";

const categories = [
  { id: "1", category: "All" },
  { id: "2", category: "My posts" },
  { id: "3", category: "Mentions" },
];

const NotificationHeader = () => {
  const [active, setActive] = useState("1");
  return (
    <ScrollView
      horizontal
      style={{ borderBottomWidth: 1, borderColor: Color.grey[400] }}
      contentContainerStyle={styles.header}
    >
      {categories.map((category) => (
        <RoundedButton
          key={category.id}
          onPress={() => setActive(category.id)}
          buttonStyles={
            active === category.id && {
              backgroundColor: Color.green[800],
              borderWidth: 0,
            }
          }
          textStyles={
            active === category.id && {
              color: Color.white,
            }
          }
        >
          {category.category}
        </RoundedButton>
      ))}
    </ScrollView>
  );
};

export default NotificationHeader;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Color.white,
  },
});
