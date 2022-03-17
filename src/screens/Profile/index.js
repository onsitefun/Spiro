import React from "react";
import Constants from 'expo-constants';
// import Share from 'react-native-share';

import {View, SafeAreaView, StyleSheet, Dimensions,ScrollView,} from "react-native";
import { Title, Caption, Text, TouchableRipple } from "react-native-paper";

import {BarChart,} from "react-native-chart-kit";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../theme";
import Header from "../../components/Header";

/*const data = [
{value: "Category 1",
value: 10,},
{value: "Category 2",
value: 20,},
{value: "Category 3",
value: 50,},
{value: "Category 4",
value: 30,},
];
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};
*/

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
const { width } = Dimensions.get("window").width;
const {height} = Dimensions.get("window").height;

    return (

       <View style={styles.container}
       height= {height}>
        <Header title="Hi #first_name" />
        
      <View style={styles.infoBoxWrapper}
      height= {70}
      alignItems= "center"
    justifyContent= "center">
      
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


<BarChart
    data={{
      labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
      datasets: [
        {
          data: [10 ,20 ,40 ,30],
          colors: [(opacity = 1) => '#139',
          (opacity = 1) => '#299',
          (opacity = 1) => '#509',
          (opacity = 1) => '#933']
        }
      ]
    }}
    width={Dimensions.get("window").width -10} // from react-native
    height={170}
    withHorizontalLabels = {false}
    withInnerLines = {false}
    withCustomBarColorFromData={true}
    flatColor={true}
    fromZero={true}
    chartConfig={{
      backgroundColor: "#000",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, 
    }}
    alignItems= "center"
    justifyContent= "center"
    marginBottom= "10"
  />


      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => this.props.navigation.navigate("Downloads")}>
          <View style={styles.menuItem}>
            <Icon name="download" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Downloads</Text>
          </View>
        </TouchableRipple>
        
        <TouchableRipple onPress={() => this.props.navigation.navigate("SessionsHistory")}>
          <View style={styles.menuItem}>
            <Icon name="history" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Sessions History</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => this.props.navigation.navigate("MinutesByTag")}>
          <View style={styles.menuItem}>
            <Icon name="chart-bar" color="#777" size={25}/>
            <Text style={styles.menuItemText}>Minutes by tag</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() =>this.props.navigation.navigate("Settings")}>
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
  title: {
    color: theme.white,
    fontFamily: theme.extrabold,
    flex: 1,
    textAlign: "center"
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
    alignItems: "center",
    justifyContent: "center"
  },
  infoBox: {
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    fontFamily: theme.extrabold,
    flex: 1,
    width: Dimensions.get("window").width / 3,
    marginTop:5,
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