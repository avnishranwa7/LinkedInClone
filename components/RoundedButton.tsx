import { FC } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

// local imports
import { Color } from "../constants/Color";

interface Props {
  children: string;
  onPress: () => void;
  buttonStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}

const RoundedButton: FC<Props> = ({
  children,
  onPress,
  buttonStyles,
  textStyles,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyles]}>
      <Text style={[styles.text, textStyles]}>{children}</Text>
    </Pressable>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Color.grey[500],
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Color.white,
  },
  text: {
    fontWeight: "500",
    fontSize: 15,
    color: Color.grey[800],
  },
});
