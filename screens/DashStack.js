import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./LandingScreen";
import MatchDetailsScreen from "./MatchDetailsScreen";
import LiveMatchScreen from "./LiveMatchScreen";
import SplashScreen from "./SplashScreen";
import LiveTeamListScreen from "./LiveTeamListScreen";

const AppAuthStack = createStackNavigator();

export function NavigationStackScreens({ navigation }) {
  return (
    <AppAuthStack.Navigator>
      {/*<AppAuthStack.Screen*/}
      {/*  name="SplashScreen"*/}
      {/*  component={SplashScreen}*/}
      {/*  options={{headerShown: false}}*/}
      {/*/>*/}
      <AppAuthStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <AppAuthStack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <AppAuthStack.Screen
        name="MatchDetailsScreen"
        component={MatchDetailsScreen}
        options={{ headerShown: true }}
      />
      <AppAuthStack.Screen
        name="LiveMatchScreen"
        component={LiveMatchScreen}
        options={{ headerShown: true }}
      />
      <AppAuthStack.Screen
        name="LiveTeamListScreen"
        component={LiveTeamListScreen}
        options={{ headerShown: false }}
      />

    </AppAuthStack.Navigator>
  );
}

export function DashStack({ navigation }) {
  return (
    <AppAuthStack.Navigator mode="modal">
      {/*Navigation push animation stack*/}
      <AppAuthStack.Screen
        name="DashStack"
        component={NavigationStackScreens}
        options={{ headerShown: false }}
      />
    </AppAuthStack.Navigator>
  );
}
