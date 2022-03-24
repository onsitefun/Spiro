//import  SettingsPage from "./src/components/SettingsPage";
/*import SectionRow from "./src/components/SectionRow";
import BaseRow from "./src/components/BaseRow";
import NavigateRow from "./src/components/NavigateRow";
import CheckRow from "./src/components/CheckRow";
import SliderRow from "./src/components/SliderRow";*/

// Dependencies
import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity,Text } from 'react-native';

import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";
import Switch from "../../components/Switch";

export default class Settings extends React.Component {

  constructor() {
    super();
    this.state = {};
  }
  render(){
      return (
       <SafeAreaView style={styles.container}>
        <View style={styles._header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles._back_btn}>
              <Ionicons
                name="chevron-back-outline"
                size={26}
                color={theme.white}
              />
              <Text style={styles.text}>Notification Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
          <View style={styles.container}>

           <View style={styles.content_container}>
             <Text style={styles.content_subtitle}>Helpful Notifications</Text>
             <Switch></Switch>
           </View>
           <Text style={styles.content_text} >Support, inspiration and reminders to keep your practice going.</Text>

           <View style={styles.content_container}>
             <Text style={styles.content_subtitle}>Mail Newsletter</Text>
             <Switch></Switch>
           </View>
           <Text style={styles.content_text} >Support, inspiration and news, just in your mail.</Text>

          </View>
      </SafeAreaView>
      );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
  },
  content: {
    flex: 1,
    backgroundColor: theme.black,
  },
  content_container: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  _header: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: theme.white,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  content_subtitle: {
    color: theme.white,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  content_text: {
    color: '#777',
    marginLeft: 35,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 26,
  },
  _back_btn:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

