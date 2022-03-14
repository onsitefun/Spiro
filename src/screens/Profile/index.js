import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import theme from "../../../theme";
import Header from "../../components/Header";
import { Title, Caption, Text, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import Share from 'react-native-share';
export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
       <View style={styles.container}>
        <Header title="Profile" />
        <View style={{marginTop:5,marginBottom: 10,}}></View>
          
      <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox}>
            <Title style={styles._header_title}>10</Title>
            <Caption style={styles.caption}>Streak Days</Caption>
          </View>

          <View style={styles.infoBox}>
            <Title style={styles._header_title}>240</Title>
            <Caption style={styles.caption}>Total Minutes</Caption>
          </View>
          
          <View style={styles.infoBox}>
            <Title style={styles._header_title}>20</Title>
            <Caption style={styles.caption}>Sessions</Caption>
          </View>

      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={styles}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Share Your Achievements</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="history" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Sessions History</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="cog" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>

    </View>
  

        /*{<View>
          <View style={styles._list}>
            <Text style={styles._th}>Streak Days</Text>
            <Text style={styles._td}>3 Days</Text>
          </View>
          <View style={styles._list}>
            <Text style={styles._th}>Total Minutes</Text>
            <Text style={styles._td}>20 MIN</Text>
          </View>
          <View style={styles._list}>
            <Text style={styles._th}>Sessions</Text>
            <Text style={styles._td}>2 Sessions</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles._btn]}>
          <Text style={styles._btn_text}>Ready to Premium?</Text>
        </TouchableOpacity> 
      </View>*/
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    color: theme.white,
    fontFamily: theme.extrabold,
    flex: 1,
    textAlign: "center",
    marginRight: 40,
  },
  _header_title: {
    color: theme.white,
    fontFamily: theme.extrabold,
    flex: 1,
    textAlign: "center",
    fontSize: 28,
  },
  _header: {
    flexDirection: "row",
    alignItems: "center",
  },
  caption: {
    fontSize: 14,
    lineHeight: 26,
    fontWeight: "600",
    color: theme.white,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    flexDirection: "row",
    height: 70,
    marginBottom: 20,
  },
  infoBox: {
    width: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    fontFamily: theme.extrabold,
    flex: 1,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: theme.white,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },

  // _btn: {
  //   backgroundColor: theme.white,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 50,
  //   marginBottom: 20,
  //   borderRadius: 8,
  //   marginTop: 50,
  //   marginHorizontal: 30,
  // },
  // _btn_text: {
  //   fontFamily: theme.TajawalBold,
  //   fontSize: 16,
  // },
  // _list: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   borderBottomWidth: 1,
  //   borderColor: "#FFFFFF80",
  //   paddingVertical: 5,
  //   marginHorizontal: 10,
  // },
  // _th: {
  //   color: theme.white,
  //   fontFamily: theme.TajawalBold,
  // },
  // _td: {
  //   color: "#FFFFFF80",
  //   fontFamily: theme.TajawalBold,
  // },
});