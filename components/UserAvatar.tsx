import { FC } from "react";
import { Avatar } from "@rneui/themed";

// local imports
import { Color } from "../constants/Color";

interface Props {
  size: number;
  image?: string;
}

const UserAvatar: FC<Props> = ({ size, image }) => {
  return (
    <Avatar
      size={size}
      rounded
      icon={{ name: "user", type: "font-awesome", color: Color.black }}
      containerStyle={{ backgroundColor: Color.grey[200] }}
      {...(image && {
        source: { uri: image },
      })}
    />
  );
};

export default UserAvatar;
