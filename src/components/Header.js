import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default function (props) {
  const navigation = useNavigation();

  return (
    //   -----Header-----
    <View style={styles._header}>
      {/*   -----Screen Title-----   */}
      <Text style={styles._title}>{props.title}</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  _header: {
    backgroundColor: theme.black,
    padding: 10,
    paddingTop: 30,
  },

  _title: {
    paddingTop: 20,
    paddingStart: 5,
    color: theme.white,
    fontFamily: theme.extrabold,
    fontSize: 40,
  },
});
