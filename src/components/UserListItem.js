import React from "react";
import { ListItem, Text, Avatar } from "@ui-kitten/components";
import { navigate } from "../navigationRef";

const UserListItem = ({ user, index, navigation }) => {
  return (
    <ListItem
      title={(evaProps) => (
        <Text {...evaProps}>{`${user.name.first} ${user.name.last}`}</Text>
      )}
      description={(evaProps) => (
        <Text
          {...evaProps}
        >{`${user.location.city}, ${user.location.country}`}</Text>
      )}
      accessoryLeft={() => {
        return <Avatar source={{ uri: user.picture.thumbnail }} />;
      }}
      onPress={() => navigate("Details", { userIndex: index })}
    />
  );
};

export default UserListItem;
