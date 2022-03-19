import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import theme from "../../theme";
import { MaterialIcons } from "@expo/vector-icons";
export default class SessionCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let { data, key, marginLeft, marginTop } = this.props;
    console.log("========>", data.fav);
    return (
      <ImageBackground
        style={[
          styles._card,
          { marginLeft: marginLeft ? 10 : 0, marginTop: marginTop ? 10 : 0 },
        ]}
        key={key}
        activeOpacity={0.5}
      >
        <View style={styles._header}>
          <View style={styles._label}>
            <Text style={styles._label_text}>{data.label}</Text>
          </View>
          {data.fav !== undefined &&
            (data.fav ? (
              <MaterialIcons name="favorite" size={24} color={theme.white} />
            ) : (
              <MaterialIcons
                name="favorite-border"
                size={24}
                color={theme.white}
              />
            ))}
        </View>
        <View>
          {data.label !== undefined &&
            (data.label == "FREE" ? (
              <View></View>
            ) : (
              <MaterialIcons
                name="lock-outline"
                size={20}
                color={theme.white}
              />
            ))}
          <Text style={styles._title}>{data.title}</Text>
          <Text style={styles._title_secondary}>{data.time}</Text>
        </View>
      </ImageBackground>
    );
  }
}

let styles = StyleSheet.create({
  _card: {
    backgroundColor: theme.grey,
    width: 190,
    height: 190,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  _label: {
    backgroundColor: theme.white,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    alignContent: "center",
    alignItems: "center",
    paddingTop: 4,
    borderRadius: 50,
  },
  _label_text: {
    fontFamily: theme.regular,
    fontSize: 14,
  },
  _title: {
    fontFamily: theme.TajawalBold,
    color: theme.white,
    textTransform: "uppercase",
    marginTop: 10,
  },
  _title_secondary: {
    fontFamily: theme.regular,
    color: theme.white,
    textTransform: "uppercase",
  },
  _header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
