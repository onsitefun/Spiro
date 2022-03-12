import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: theme.black }}
    >
      <View style={styles.sideMenuContainer}>
        <View style={styles._profile_container}>
          <FontAwesome name="user-circle-o" size={44} color={"#969696"} />
          <Text
            style={[styles._bold_text, { color: theme.white, marginTop: 30 }]}
          >
            Email @Email.com
          </Text>
        </View>
        <Drawer.Section style={{ backgroundColor: "gray", height: 0.5 }} />
        <TouchableOpacity
          style={styles._logout_row}
          onPress={() => navigation.navigate("GettingStart")}
        >
          <MaterialCommunityIcons name="logout" size={34} color={theme.white} />
          <Text style={{ color: "white", fontFamily: theme.TajawalBold }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  sideMenuContainer: {
    backgroundColor: theme.black,
    flex: 1,
  },
  _profile_container: {
    marginBottom: 20,
    flex: 1,
    padding: 10,
    marginTop: 40,
  },

  _profile_view: {
    borderWidth: 1,
    height: 110,
    width: 110,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 50,
  },
  _bold_text: {
    // marginTop: 20,
    fontSize: 15,
    fontFamily: theme.medium,
    color: "#FFFFFFC3",
  },
  _logout_row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
