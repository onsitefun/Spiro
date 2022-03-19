import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";
export default class Tags extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let sessions = [
      {
        title: "Title title title",
        img: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixid=MnwxMDEzNjV8MHwxfHNlYXJjaHwxNXx8c2xlZXB8ZW58MHx8fHwxNjQxOTA3NDYz&ixlib=rb-1.2.1&utm_source=Glide&utm_medium=referral&w=164&h=164&dpr=2&fit=crop&auto=format",
        day: "DAY 1",
      },
      {
        title: "Title title title",
        img: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixid=MnwxMDEzNjV8MHwxfHNlYXJjaHwxNXx8c2xlZXB8ZW58MHx8fHwxNjQxOTA3NDYz&ixlib=rb-1.2.1&utm_source=Glide&utm_medium=referral&w=164&h=164&dpr=2&fit=crop&auto=format",
        day: "DAY 2",
      },
      {
        title: "Title title title",
        img: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixid=MnwxMDEzNjV8MHwxfHNlYXJjaHwxNXx8c2xlZXB8ZW58MHx8fHwxNjQxOTA3NDYz&ixlib=rb-1.2.1&utm_source=Glide&utm_medium=referral&w=164&h=164&dpr=2&fit=crop&auto=format",
        day: "DAY 3",
      },
      {
        title: "Title title title",
        img: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixid=MnwxMDEzNjV8MHwxfHNlYXJjaHwxNXx8c2xlZXB8ZW58MHx8fHwxNjQxOTA3NDYz&ixlib=rb-1.2.1&utm_source=Glide&utm_medium=referral&w=164&h=164&dpr=2&fit=crop&auto=format",
        day: "DAY 4",
      },
      {
        title: "Title title title",
        img: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixid=MnwxMDEzNjV8MHwxfHNlYXJjaHwxNXx8c2xlZXB8ZW58MHx8fHwxNjQxOTA3NDYz&ixlib=rb-1.2.1&utm_source=Glide&utm_medium=referral&w=164&h=164&dpr=2&fit=crop&auto=format",
        day: "DAY 5",
      },
    ];
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
          <Text style={styles._header_title}>TAG</Text>
        </View>

        <Text style={styles._desc}>
          Lorem ipsum dolor sit amet. Eum quis asperna tur eum reprehenderit
          repellendus ut illo intern os ea voluptas consequatur sed minima
          accusantium qui fugit omnis. Est perferendis perferendis sit numquam
          maiores et fugiat {"\n"}
          {"\n"}
          {"\n"} quibusdam non quidem inventore. Voluptate quia id minima iste
          aut officiis porro est repudiandae alias quo rerum tempore. Eum porro
          sint vel dolore velit eum suscipit voluptatem!
        </Text>
        <Text style={[styles._sesion_title, { borderTopWidth: 1 }]}>
          Sessions
        </Text>
        <ScrollView>
          <View>
            {sessions.map((val, i) => {
              return (
                <View key={i} style={styles._sescion}>
                  <View style={styles._section_data}>
                    <View>
                      <Text style={[styles._sesion_title, { fontSize: 15 }]}>
                        {val.title}
                      </Text>
                      <Text style={styles._sesion_day}>{val.day}</Text>
                      <Text style={styles._sesion_day}>Title title</Text>
                    </View>
                  </View>
                  <Image
                    source={{ uri: val.img }}
                    style={styles._sesion_image}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
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
  },
  _back_btn: {
    color: theme.white,
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
  _thumbnail_title: {
    color: theme.white,
    fontFamily: theme.extrabold,
  },
  _desc: {
    color: theme.white,
    fontFamily: theme.medium,
    marginVertical: 15,
  },
  _sesion_title: {
    color: theme.white,
    fontFamily: theme.TajawalBold,
    fontSize: 22,
    borderColor: theme.grey,
  },
  _sesion_day: {
    color: theme.grey,
    fontFamily: theme.TajawalBold,
  },
  _sesion_image: {
    height: 67,
    width: 67,
    borderRadius: 8,
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
});
