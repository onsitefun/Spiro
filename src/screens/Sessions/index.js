import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import theme from "../../../theme";
import Header from "../../components/Header";
import SessionCard from "../../components/SessionCard";
export default class Sessions extends React.Component {
  constructor() {
    super();
    this.state = {
      active: "All",
    };
  }
  render() {
    let { active } = this.state;

    let allData = [
      {
        title: "Category 1",
        sessions: [
          {
            label: "FREE",
            title: "Title title title",
            fav: true,
            time: "10 MIN",
          },
          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },
          {
            label: "PREMIUM",
            title: "Title title title",
            fav: true,
            time: "10 MIN",
          },

          {
            label: "FREE",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },
        ],
      },
      {
        title: "Category 1",
        sessions: [
          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },
          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },
          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },

          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },
        ],
      },
      {
        title: "Category 1",
        sessions: [
          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },
          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },
          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },

          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },
        ],
      },
    ];

    let favData = [
      {
        title: "Category 1",
        sessions: [
          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },

          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },
        ],
      },
      {
        title: "Category 1",
        sessions: [
          {
            label: "PREMIUM",
            title: "Title title title",
            fav: false,
            time: "10 MIN",
          },
        ],
      },
    ];

    return (
      <View style={styles._container}>
        <Header title="Sessions" />
        <View style={styles._tabs}>
          <TouchableOpacity
            style={[
              styles._tab_item,
              { backgroundColor: active === "All" ? theme.black : theme.grey },
            ]}
            onPress={() => this.setState({ active: "All" })}
          >
            <Text style={styles._tab_text}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles._tab_item,
              {
                backgroundColor:
                  active === "Favorites" ? theme.black : theme.grey,
              },
            ]}
            onPress={() => this.setState({ active: "Favorites" })}
          >
            <Text style={styles._tab_text}>Favorites</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles._layer}>
            <ScrollView>
              {active === "All" &&
                allData.map((cat, index) => {
                  return (
                    <View key={index}>
                      <Text style={styles._title}>{cat.title}</Text>
                      <ScrollView horizontal>
                        <View style={styles._card_section}>
                          {cat.sessions.map((val, i) => {
                            return (
                              <TouchableOpacity
                                key={i}
                                onPress={() =>
                                  this.props.navigation.navigate("PlaySession")
                                }
                              >
                                <SessionCard
                                  data={val}
                                  key={i}
                                  marginLeft={0}
                                  marginTop={0}
                                />
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </ScrollView>
                    </View>
                  );
                })}
              {active === "Favorites" &&
                favData.map((cat, index) => {
                  return (
                    <View key={index}>
                      <Text style={styles._title}>{cat.title}</Text>
                      <ScrollView horizontal>
                        <View style={styles._card_section}>
                          {cat.sessions.map((val, i) => {
                            return (
                              <TouchableOpacity key={i}>
                                <SessionCard
                                  data={val}
                                  key={i}
                                  marginLeft={0}
                                  marginTop={0}
                                />
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </ScrollView>
                    </View>
                  );
                })}
            </ScrollView>
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
  },
  _card_section: {
    flexDirection: "row",
    flex: 1,
  },
  _title: {
    color: theme.white,
    fontFamily: theme.TajawalBold,
    fontSize: 25,
    paddingTop: 25,
    paddingBottom: 5,
  },
  _layer: {
    padding: 10,
  },
  _tabs: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: theme.grey,
    borderRadius: 12,
    height: 37,
    padding: 2,
  },
  _tab_item: {
    flex: 1,
    borderRadius: 10,
    height: 33,
    justifyContent: "center",
    alignItems: "center",
  },
  _tab_text: {
    color: theme.white,
    fontFamily: theme.TajawalBold,
    fontSize: 15,
    marginTop: 5,
  },
});
