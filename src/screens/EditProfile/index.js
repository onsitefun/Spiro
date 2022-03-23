import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity,Text,TextInput } from 'react-native';

import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";

export default class EditProfile extends React.Component {

  constructor() {
    super();
    this.state = {
      first_name: "First Name",
      last_name: "Last Name",
    };
  }

  render(){
    let { first_name } = this.state;
    let { last_name } = this.state;

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
            </View>
          </TouchableOpacity>
</View>
          <View style={styles.container}>
          <View style={{marginTop:15,marginBottom: 10,}}>
          

</View>
<Text style={styles.text}>EditProfile</Text>
          {/*   ------FIRST NAME------  */}
          <Text style={styles._title} >First Name</Text>
          <TextInput
            placeholder="First Name"
            text="First Name"
            placeholderTextColor={theme.grey}
            style={styles._input}
            value={first_name}
            onChangeText={(first) => this.setState({ first_name: first })}
          />
          {/*   ------LAST NAME------  */}
          <Text style={styles._title} >Last Name</Text>
          <TextInput
            placeholder="Last Name"
            text="Last Name"
            placeholderTextColor={theme.grey}
            style={styles._input}
            value={first_name}
            onChangeText={(last) => this.setState({ last_name: last })}
          />
          {/*   ------SAVE button------  */}
          <TouchableOpacity style={styles._btn} onPress={() => {}}>
            <Text style={styles._btn_text}>Save</Text>
          </TouchableOpacity>

          {/*   ------DELETE button------  */}
          <TouchableOpacity style={styles._btn} onPress={() => {}}>
            <Text style={styles._btn_text}>Delete Account</Text>
          </TouchableOpacity>
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
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
   _input: {
    backgroundColor: theme.btnBg,
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.black,
    padding: 10,
    marginBottom: 70,
    fontFamily: theme.TajawalBold,
  },
  _btn: {
    backgroundColor: theme.btnBg,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: 20,
    borderRadius: 8,
  },
  _btn_text: {
    color: theme.white,
    fontFamily: theme.TajawalBold,
  },
  _label: {
    fontFamily: theme.TajawalBold,
    textAlign: "center",
    padding: 10,
    fontSize: 15,
  },
  _title: {
    fontFamily: theme.TajawalBold,
    color: theme.white,
    fontSize: 18,
    textAlign: "left",
    marginBottom: 20,
  },
});

