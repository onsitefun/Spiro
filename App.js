import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import theme from "./theme";
import Navigation from "../Spiro/src/navigation";
import "react-native-gesture-handler";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

export default function App(props) {
  let [fontsLoaded] = useFonts({
    TajawalBlack: require("../Spiro/assets/Fonts/Tajawal-Black.ttf"),
    TajawalBold: require("../Spiro/assets/Fonts/Tajawal-Bold.ttf"),
    TajawalExtraBold: require("../Spiro/assets/Fonts/Tajawal-ExtraBold.ttf"),
    TajawalExtraLight: require("../Spiro/assets/Fonts/Tajawal-ExtraLight.ttf"),
    TajawalLight: require("../Spiro/assets/Fonts/Tajawal-Light.ttf"),
    TajawalMedium: require("../Spiro/assets/Fonts/Tajawal-Medium.ttf"),
    TajawalRegular: require("../Spiro/assets/Fonts/Tajawal-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigation />;
  }
}
const styles = StyleSheet.create({});