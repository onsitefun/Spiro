import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AudioSlider from "./../../components/AudioSlider";
import AudioFile from "./../../../assets/assets_counting.m4a";
export default class PlaySession extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const tags = ["TAG 1", "TAG 2 TAG 2"];
    return (
      <View style={styles._container}>
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
          <Text style={styles._header_title}>Title title title</Text>
        </View>
        <ImageBackground style={styles._thumbnail}>
          <Text style={styles._thumbnail_title}>Title title title</Text>
          <Text style={styles._thumbnail_title_secondary}>10 Sessions</Text>
        </ImageBackground>
        <AudioSlider audio={AudioFile} />
        <View style={styles._tag_row}>
          {tags.map((val, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles._tag}
                onPress={() => this.props.navigation.navigate("Tags")}
              >
                <Text style={styles._tag_text}>{val}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles._desc}>
          Lorem ipsum dolor sit amet. Aut repellat omnis sit galisum beatae sit
          debitis quaerat qui officiis explicabo. Ea dolores exercitationem.
        </Text>
        <View style={styles._footer}>
          <View style={styles._label}>
            <Text style={styles._label_text}>
              <Text style={styles._sesion_title}>Favorite</Text>
            </Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons
              name="favorite-border"
              size={24}
              color={theme.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: theme.black,
    padding: 10,
    paddingTop: 30,
  },
  _back_text: {
    color: theme.white,
    fontFamily: theme.medium,
    marginRight: 40,
  },
  _header_title: {
    color: theme.white,
    fontFamily: theme.extrabold,
    flex: 1,
    textAlign: "center",
    marginRight: 40,
  },
  _header: {
    flexDirection: "row",
    alignItems: "center",
  },
  _thumbnail: {
    height: 292,
    backgroundColor: theme.grey,
    borderRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
    paddingLeft: 20,
    marginTop: 30,
  },
  // _thumbnail_title: {
  //   color: theme.white,
  //   fontFamily: theme.extrabold,
  //   fontSize: 17,
  // },
  _thumbnail_title: {
    fontFamily: theme.TajawalBold,
    color: theme.white,
    textTransform: "uppercase",
  },
  _thumbnail_title_secondary: {
    fontFamily: theme.regular,
    color: theme.white,
    textTransform: "capitalize",
  },
  _desc: {
    color: theme.white,
    fontFamily: theme.medium,
    marginVertical: 10,
  },
  _sesion_title: {
    color: theme.white,
    fontFamily: theme.TajawalBold,
    fontSize: 22,
  },
  _sesion_day: {
    color: theme.grey,
    fontFamily: theme.TajawalBold,
  },
  _sesion_image: {
    height: 67,
    width: 67,
    borderRadius: 100,
    marginRight: 10,
  },
  _section_data: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  _sescion: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: theme.grey,
    paddingVertical: 10,
  },
  _footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100,
    borderTopWidth: 1,
    borderColor: theme.grey,
    paddingVertical: 10,
  },
  _tag: {
    backgroundColor: theme.grey,
    margin: 4,
    padding: 2,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 0,
  },
  _tag_text: {
    color: theme.white,
    fontFamily: theme.TajawalBold,
  },
  _tag_row: {
    flexDirection: "row",
  },
});
