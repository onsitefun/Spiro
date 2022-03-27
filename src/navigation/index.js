// In App.js in a new project

import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  GettingStart,
  EnterPin,
  Journeys,
  Sessions,
  Journey,
  Profile,
  Tags,
  PlaySession,
  Settings,
  SessionsHistory,
  MinutesByTag,
  Downloads,
  LoginOptions,
  Login,
  Register,
  OnBoarding,
  Survey,
} from "./../screens";
import theme from "../../theme";
import DrawerContent from "./../components/DrawerContent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let path;

          if (route.name === "Journeys") {
            path = require("./../../assets/journeys_icon.png");
          } else if (route.name === "Sessions") {
            path = require("./../../assets/sessions_icon.png");
          } else if (route.name === "Profile") {
            path = require("./../../assets/profile_icon.png");
          }

          return (
            <Image
              source={path}
              style={{ height: 28, width: 28, marginTop: 5 }}
            />
          );
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.black,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: {
          fontFamily: theme.TajawalBold,
        },
      })}
    >
      <Tab.Screen name="Journeys" component={Journeys} />
      <Tab.Screen name="Sessions" component={Sessions} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeTab" component={HomeTabs} />
    </Drawer.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Survey" component={Survey} />
        <Stack.Screen name="GettingStart" component={GettingStart} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
        <Stack.Screen name="EnterPin" component={EnterPin} />
        <Stack.Screen name="Journey" component={Journey} />
        <Stack.Screen name="PlaySession" component={PlaySession} />
        <Stack.Screen name="Tags" component={Tags} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SessionsHistory" component={SessionsHistory} />
        <Stack.Screen name="MinutesByTag" component={MinutesByTag} />
        <Stack.Screen name="Downloads" component={Downloads} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginOptions" component={LoginOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
