import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity,Text } from 'react-native';

import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";

export default class About extends React.Component {

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
              <Text style={styles.text}>About</Text>
            </View>
          </TouchableOpacity>
</View>
          <View style={styles.container}>
          <View style={{marginTop:15,marginBottom: 10,}}>
          <Text style={styles.text}>Spiro is a breathwork app for anyone to create healthy habits around physical and mental.
          Spiro it's the product of a throughout research in the wellness and mental health space.
          Spiro is produced by Alamas Labs, Inc.</Text>
          

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