import React from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import theme from "../../../theme";
import Header from "../../components/Header";
import JourneyCard from "../../components/JourneyCard";
export default class Journeys extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let journeys = [
      {
        label: "55 MIN",
        title: "Title title title",
      },
      {
        label: "55 MIN",
        title: "Title title title",
      },
      {
        label: "55 MIN",
        title: "Title title title",
      },

      {
        label: "55 MIN",
        title: "Title title title",
      },
      {
        label: "55 MIN",
        title: "Title title title",
      },

      {
        label: "55 MIN",
        title: "Title title title",
      },
      {
        label: "55 MIN",
        title: "Title title title",
      },
      {
        label: "55 MIN",
        title: "Title title title",
      },
    ];
    return (
      <View style={styles._container}>
        <Header title="Journeys" />
        <ScrollView>
          <View style={styles._cards_section}>
            {journeys.map((val, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    this.props.navigation.navigate("Journey", {
                      data: val,
                    })
                  }
                >
                  <JourneyCard data={val} key={i} marginTop={15} />
                </TouchableOpacity>
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
  },
  _cards_section: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    flex: 1,
  },
});
