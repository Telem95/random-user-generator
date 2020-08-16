import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import {
  Icon,
  Divider,
  TopNavigation,
  TopNavigationAction,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import { Context as UserContext } from "../context/UserContext";
import UserProfile from "../components/UserProfile";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const DetailsScreen = ({ navigation }) => {
  const { state } = useContext(UserContext);
  const selectedUser = state[navigation.getParam("userIndex")];
  const styles = useStyleSheet(themedStyle);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title="Profile"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <UserProfile user={selectedUser} />
    </SafeAreaView>
  );
};

const themedStyle = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-2",
  },
});

export default DetailsScreen;
