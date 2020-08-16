import React from "react";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import LoadingScreen from "../screens/LoadingScreen";
import { setNavigator } from "../navigationRef";

const HomeNavigator = createStackNavigator(
  {
    Loading: LoadingScreen,
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  { headerMode: "none" }
);

const App = createAppContainer(HomeNavigator);

export const AppNavigator = () => (
  <NavigationContainer>
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  </NavigationContainer>
);
