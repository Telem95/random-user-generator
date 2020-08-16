import React, { useContext, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  useStyleSheet,
  StyleService,
  Button,
  Divider,
  TopNavigation,
  List,
  Icon,
} from "@ui-kitten/components";
import { Context as UserContext } from "../context/UserContext";
import UserListItem from "../components/UserListItem";

const HomeScreen = ({ navigation }) => {
  const { state, getUsers } = useContext(UserContext);
  const styles = useStyleSheet(themedStyle);

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Random Users Generator" alignment="center" />
      <Divider />
      <List
        style={styles.list}
        data={state}
        keyExtractor={(item) => item.login.md5}
        renderItem={({ item, index }) => {
          return <UserListItem user={item} index={index} />;
        }}
        ItemSeparatorComponent={Divider}
      />
      <Button onPress={getUsers}>Generate Different Users</Button>
    </SafeAreaView>
  );
};

const themedStyle = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-2",
  },
});

export default HomeScreen;
