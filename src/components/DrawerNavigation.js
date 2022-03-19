import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

export default function () {
  const navigation = useNavigation();
  return (
      <TouchableOpacity style={styles.drawer}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Entypo name="dots-three-vertical" size={20} color={theme.white}/>
      </TouchableOpacity>
  );
}
let styles = StyleSheet.create({
drawer: {
  alignSelf: 'flex-end',
  marginRight: 5,
}
});