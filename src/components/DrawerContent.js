import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableRipple } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//import Icon from "react-native-vector-icons/AntDesign";

import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

export default function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: theme.black }}
    >
      <View style={styles.sideMenuContainer}>
        
          <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <View style={styles.menuItem}>
            <Icon name="pencil" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("HelpCenter")}>
          <View style={styles.menuItem}>
            <Icon name="help" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Help Center</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync("https://drive.google.com/file/d/1ezAcCvyfYCTfERR7ggGB5FCOs2Le--HJ/view")}>
          <View style={styles.menuItem}>
            <Icon name="file" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Terms & Conditions</Text>
          </View>
        </TouchableOpacity>

       <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync("https://drive.google.com/file/d/1zj0ixtTh5Y-BsEB5MpKPQOEa7XKfsoh7/view")}>
          <View style={styles.menuItem}>
            <Icon name="shield-account" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <View style={styles.menuItem}>
            <Icon name="bell-outline" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Notification Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Trial")}>
          <View style={styles.menuItem}>
            <Icon name="trophy" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Start 7 days Free Trial</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <View style={styles.menuItem}>
            <Icon name="exclamation" color="#777" size={25}/>
            <Text style={styles.menuItemText}>About</Text>
          </View>
        </TouchableOpacity>

      </View>


        <TouchableOpacity onPress={() => navigation.navigate("GettingStart")}>
        <View style={styles.menuItem}>
          <Icon name="logout" color="#777" size={25}/>
          <Text style={styles.menuItemText}>Sign Out</Text>
          </View>
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
   menuWrapper: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: theme.white,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
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
/*
<View style={styles._profile_container}>
          <FontAwesome name="user-circle-o" size={44} color={"#969696"} />
          <Text
            style={[styles._bold_text, { color: theme.white, marginTop: 30 }]}
          >
            Email @Email.com
          </Text>
          */