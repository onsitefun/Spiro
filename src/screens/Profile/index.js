import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from "../../../theme";
import Header from "../../components/Header";
export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles._container}>
        <Header title="Profile" />
        {/* <View>
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
        </TouchableOpacity> */}
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: theme.black,
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
