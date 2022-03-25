import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity,Text, Dimensions } from 'react-native';

import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const {height} = Dimensions.get("window").height;
const { screen_width } = Dimensions.get("window").width;
export default class Trial extends React.Component {

  constructor() {
    super();
    this.state = {};
  }
  render(){
      return (
       <SafeAreaView style={styles.container}
       height= {height}
       width={screen_width}>

        <View style={styles._header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles._back_btn}>
              <Ionicons
                name="chevron-back-outline"
                size={26}
                color={theme.white}
              />
            </View>
            </TouchableOpacity> 
</View>

          <View style={styles.container}>
        
            <Text style={styles.header_title}>Start Your Journey</Text>
            <Text style={styles.text}>Unlock Spiro Pro for all your team at a fixed price, forever!</Text>
             
<View style={styles.menuWrapper}>
            <View style={styles.menuItem}>
              <Icon name="check" color="#c9dc87" size={25} marginRight={100}/>
              <Text style={styles.menuItemText}>Unlimited access to all 200+ sessions</Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="check" color="#c9dc87" size={25}/>
              <Text style={styles.menuItemText}>Progress Tracking</Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="check" color="#c9dc87" size={25}/>
              <Text style={styles.menuItemText}>Unlock top breathwork facilitators</Text>
            </View>

            <View style={styles.menuItem}>
            <View style={styles._box_yearly}>

              <View style={styles.boxWrapper}>
          
               <Text style={styles.box_text1}>Yearly</Text>
               <Text style={styles.box_text1}>$1000/yr</Text>

               <Text style={styles.box_text2}>Pay yearly,</Text>
               <Text style={styles.box_text2}>First 7 Days Free</Text>
          
              </View>
      
            </View>

            <View style={styles._box_monthly}>

              <View style={styles.boxWrapper}>
          
               <Text style={styles.box_text1}>Monthly</Text>
               <Text style={styles.box_text1}>$99/mo</Text>

               <Text style={styles.box_text2}>Pay monthly,</Text>
               <Text style={styles.box_text2}>First 7 Days Free</Text>
          
              </View>

            </View>

            </View>

            {/* <View style={styles.menuItem}>
             <TouchableOpacity style={styles._btn}>
              <Text style={styles.box_text2}>Try free and subscribe</Text>
             </TouchableOpacity>
            </View> */}
</View>

            <View style={styles.menuItem}>
             <TouchableOpacity style={styles._btn}>
              <Text style={styles.box_text2}>Try free and subscribe</Text>
             </TouchableOpacity>
            </View>

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
  _header: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: theme.white,
  //  marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
  },
  boxWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  box_text1: {
    color: theme.black,
  //  marginLeft: 20,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 26,
    textAlign: "center",
    marginBottom: 10
  },
  box_text2: {
    color: theme.black,
  //  marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    marginBottom: 5
  },
  _back_btn:{
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  header_title: {
    paddingTop: 10,
    paddingStart: 15,
    color: theme.white,
    fontFamily: theme.extrabold,
    fontSize: 40,
    marginBottom: 17,
    textAlign: "center",
  },
  menuWrapper: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: Dimensions.get("window").width,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  menuItemText: {
    color: theme.white,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  _box_yearly: {
    width: (Dimensions.get("window").width / 2) - 30,
    height: 190,
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
   // flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#c9dc87",
  },
   _box_monthly: {
    width: (Dimensions.get("window").width / 2) - 30,
    height: 190,
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
   // flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff8dc",
  },
  _btn: {
    flex: 1,
    backgroundColor: "#c9dc87",
  //  flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
  },
});