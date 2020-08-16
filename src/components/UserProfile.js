import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import {
  Avatar,
  Button,
  StyleService,
  Text,
  useStyleSheet,
  Layout,
  Icon,
} from "@ui-kitten/components";
import { ImageOverlay } from "../extras/image-overlay.component";
import { ProfileSocial } from "../extras/profile-social.component";
import { MessageCircleIcon, PersonAddIcon, PinIcon } from "../extras/icons";

const UserProfile = ({ user }) => {
  const styles = useStyleSheet(themedStyle);

  return (
    <Layout style={styles.layout}>
      <ScrollView style={styles.container}>
        <ImageOverlay
          style={styles.header}
          source={require("../../assets/image-background.jpg")}
        >
          <Avatar
            style={styles.profileAvatar}
            source={{ uri: user.picture.large }}
          />
          <Text style={styles.profileName} category="h5" status="control">
            {`${user.name.first} ${user.name.last}`}
          </Text>
          <View style={styles.locationContainer}>
            <PinIcon />
            <Text style={styles.location} status="control">
              {user.location.country}
            </Text>
          </View>
          <View style={styles.profileButtonsContainer}>
            <Button style={styles.profileButton} icon={PersonAddIcon}>
              FOLLOW
            </Button>
            <Button
              style={styles.profileButton}
              status="control"
              icon={MessageCircleIcon}
            >
              MESSAGE
            </Button>
          </View>
          <View style={styles.socialsContainer}>
            <ProfileSocial
              style={styles.profileSocial}
              hint="Followers"
              value="1500"
            />
            <ProfileSocial
              style={styles.profileSocial}
              hint="Following"
              value="86"
            />
            <ProfileSocial
              style={styles.profileSocial}
              hint="Posts"
              value="116"
            />
          </View>
        </ImageOverlay>
        <Text style={styles.sectionLabel} category="s1">
          About
        </Text>
        <Text style={styles.profileDescription} appearance="hint">
          I'm a Traveler. I'm like listening to music, going to the cinema,
          walking with my friends, drawing pictures and traveling.
        </Text>
      </ScrollView>
    </Layout>
  );
};

const themedStyle = StyleService.create({
  layout: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingVertical: 24,
    alignItems: "center",
  },
  profileAvatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    marginVertical: 16,
  },
  profileName: {
    zIndex: 1,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    marginVertical: 8,
  },
  profileButtonsContainer: {
    flexDirection: "row",
    marginVertical: 32,
    marginHorizontal: 20,
  },
  profileButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  socialsContainer: {
    flexDirection: "row",
    width: "75%",
    marginVertical: 8,
  },
  profileSocial: {
    flex: 1,
  },
  sectionLabel: {
    marginTop: 24,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  profileDescription: {
    marginHorizontal: 16,
  },
});

export default UserProfile;
