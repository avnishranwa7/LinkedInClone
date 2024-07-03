import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

// local imports
import { NetworkUserCard } from "../../components";
import { Color } from "../../constants/Color";
import { NetworkDataType } from "./Data";

interface Props {
  network: NetworkDataType;
}

function getHeadingString(
  type: "location" | "recent activity" | "institute",
  value?: string
) {
  if (type === "location") return `People you may know in ${value}`;
  if (type === "recent activity")
    return "People you may know based on your recent activity";
  if (type === "institute") return `People you may know from ${value}`;
}

const CategoriesCard: FC<Props> = ({ network }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>
        {getHeadingString(network.type, network.typeValue)}
      </Text>
      <View style={styles.userView}>
        {network.users.map((id) => (
          <NetworkUserCard key={id} userId={id} />
        ))}
      </View>
    </View>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  heading: {
    fontSize: 15.5,
  },
  userView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
});
