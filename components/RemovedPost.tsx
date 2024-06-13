import { FC } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

// local imports
import { Color } from "../constants/Color";

interface Props {
  remove: () => void;
  undo: () => void;
}

const RemovedPost: FC<Props> = ({ remove, undo }) => {
  return (
    <View style={styles.post}>
      <View style={styles.undoView}>
        <Text style={styles.removedText}>Post removed from your feed</Text>
        <Pressable
          onPress={undo}
          style={({ pressed }) => [
            pressed && styles.pressable,
            { borderRadius: 4 },
          ]}
        >
          <Text style={styles.undoText}>Undo</Text>
        </Pressable>
      </View>
      <View style={styles.feedbackView}>
        <Text>Tell us more so we can adjust your feed.</Text>
        <Pressable
          onPress={remove}
          style={({ pressed }) => [
            styles.roundedFeedback,
            pressed && styles.pressableRounded,
          ]}
        >
          <Text style={styles.roundedFeedbackText}>
            Not interested in this optic
          </Text>
        </Pressable>
        <Pressable
          onPress={remove}
          style={({ pressed }) => [
            styles.roundedFeedback,
            pressed && styles.pressableRounded,
          ]}
        >
          <Text style={styles.roundedFeedbackText}>
            Not interested in Dipchand's posts
          </Text>
        </Pressable>
        <Pressable
          onPress={remove}
          style={({ pressed }) => [
            styles.roundedFeedback,
            pressed && styles.pressableRounded,
          ]}
        >
          <Text style={styles.roundedFeedbackText}>
            Not appropriate for LinkedIn
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RemovedPost;

const styles = StyleSheet.create({
  post: {
    backgroundColor: Color.white,
    marginVertical: 4,
    paddingHorizontal: 12,
  },
  undoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderColor: Color.grey[300],
    borderBottomWidth: 1,
  },
  removedText: {
    fontWeight: "600",
  },
  undoText: {
    fontWeight: "600",
    color: Color.blue[800],
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  feedbackView: {
    paddingVertical: 8,
  },
  roundedFeedback: {
    borderColor: Color.grey[500],
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    marginVertical: 8,
  },
  roundedFeedbackText: {
    fontSize: 16,
    fontWeight: "500",
    color: Color.grey[800],
  },
  pressable: {
    backgroundColor: Color.blue[50],
  },
  pressableRounded: {
    backgroundColor: Color.grey[300],
  },
});
