import React, { useContext, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  useStyleSheet,
  StyleService,
  Button,
  Divider,
  Layout,
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
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Random User Generator" alignment="center" />
      <Divider />
      <Layout style={styles.layout}>
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
      </Layout>
    </SafeAreaView>
  );
};

const themedStyle = StyleService.create({
  layout: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});

export default HomeScreen;
