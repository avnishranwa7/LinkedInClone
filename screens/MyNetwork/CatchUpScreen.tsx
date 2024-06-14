import { ScrollView, StyleSheet, View } from "react-native";

// local imports
import { RoundedButton } from "../../components";
import { Color } from "../../constants/Color";
import { useState } from "react";

const topics = [
  { id: "1", topic: "All" },
  { id: "2", topic: "Job Changes" },
  { id: "3", topic: "Hiring" },
  { id: "4", topic: "Birthdays" },
  { id: "5", topic: "Work anniversaries" },
];

const CatchUpScreen = () => {
  const [active, setActive] = useState("1");

  return (
    <View>
      <ScrollView
        horizontal
        style={{ borderTopWidth: 1, borderColor: Color.grey[400] }}
        contentContainerStyle={styles.categoriesView}
      >
        {topics.map((topic) => (
          <RoundedButton
            key={topic.id}
            onPress={() => setActive(topic.id)}
            buttonStyles={
              active === topic.id && {
                backgroundColor: Color.green[800],
                borderWidth: 0,
              }
            }
            textStyles={
              active === topic.id && {
                color: Color.white,
              }
            }
          >
            {topic.topic}
          </RoundedButton>
        ))}
      </ScrollView>
    </View>
  );
};

export default CatchUpScreen;

const styles = StyleSheet.create({
  categoriesView: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Color.white,
  },
});
