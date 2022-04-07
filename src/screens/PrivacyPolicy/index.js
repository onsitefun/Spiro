import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity,Text } from 'react-native';

import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";

export default class PrivacyPolicy extends React.Component {

  constructor() {
    super();
    this.state = {};
  }
  render(){
      return (
        <SafeAreaView style={styles.container}>
        
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
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  _back_btn:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

/* <SafeAreaView style={styles.container}>
        <View style={styles._header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles._back_btn}>
              <Ionicons
                name="chevron-back-outline"
                size={26}
                color={theme.white}
              />
              <Text style={styles.text}>Privacy Policy</Text>
            </View>
          </TouchableOpacity>
</View>
          <View style={styles.container}>
          <View style={{marginTop:15,marginBottom: 10,}}>
          <Link to={"https://drive.google.com/file/d/1zj0ixtTh5Y-BsEB5MpKPQOEa7XKfsoh7/view"}></Link>

</View>

        </View>
      </SafeAreaView> */