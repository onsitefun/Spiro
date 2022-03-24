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
import RBSheet from "react-native-raw-bottom-sheet";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default class PlaySession extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const tags = ["TAG 1", "TAG 2 TAG 2"];
    return (
      <ImageBackground
        style={styles._container}
        source={require("./../../../assets/songbg.png")}
        resizeMode="cover"
      >
        <View style={styles._header}>
          <Foundation
            name="info"
            size={30}
            color="white"
            onPress={() => this.RBSheet.open()}
          />

          <Entypo
            name="cross"
            size={30}
            color={theme.white}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={styles._thumbnail_title}>Title title title</Text>
          <Text style={[styles._thumbnail_title, { fontSize: 15 }]}>
            Lorem ipsum dolor sit amet. Aut repellat omnis sit galisum beatae
            sit debitis quaerat qui officiis explicabo. Ea dolores
            exercitationem.
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <AudioSlider audio={AudioFile} />
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <TouchableOpacity>
              <Foundation name="previous" size={24} color={theme.white} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="playcircleo"
                size={74}
                color={theme.white}
                style={{ marginHorizontal: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Foundation name="next" size={24} color={theme.white} />
            </TouchableOpacity>
          </View> */}
          <View style={styles._footer}>
            <MaterialIcons name="favorite" size={30} color={theme.white} />
            <AntDesign name="download" size={30} color={theme.white} />
            <AntDesign name="sharealt" size={30} color={theme.white} />
          </View>
        </View>

        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            container: {
              backgroundColor: theme.black,
              padding: 20,
              borderTopRightRadius: 49,
              borderTopLeftRadius: 49,
            },
          }}
        >
          <Text
            style={{
              color: theme.white,
              fontFamily: theme.TajawalBold,
              fontSize: 22,
            }}
          >
            Title title title
          </Text>
          <Text style={styles._desc}>
            Lorem ipsum dolor sit amet. Aut repellat omnis sit galisum beatae
            sit debitis quaerat qui officiis explicabo. Ea dolores
            exercitationem.
          </Text>
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
          <Text
            style={{
              color: theme.white,
              fontFamily: theme.TajawalBold,
              fontSize: 22,
            }}
          >
            Category
          </Text>

          {/* <View style={styles._footer}> */}
          {/* <View style={styles._label}>
              <Text style={styles._label_text}>
                <Text style={styles._sesion_title}>Favorite</Text>
              </Text>
            </View> */}
          {/* <TouchableOpacity>
              <MaterialIcons
                name="favorite-border"
                size={24}
                color={theme.white}
              />
            </TouchableOpacity> */}
          {/* <MaterialIcons name="favorite" size={24} color="black" /> */}
          {/* </View> */}
        </RBSheet>
      </ImageBackground>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    // backgroundColor: theme.black,
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
  },
  _header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
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
  _thumbnail_title: {
    color: theme.white,
    fontFamily: theme.extrabold,
    fontSize: 17,
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
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: theme.grey,
    paddingBottom: 30,
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
    marginVertical: 20,
  },
});
