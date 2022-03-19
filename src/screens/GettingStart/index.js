import React from "react";
import {
  View,
  TouchableOpacity, // button wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import theme from "./../../../theme";

export default class GettingStart extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }

  Continue = () => {
    this.props.navigation.navigate("EnterPin");
  };

  render() {
    let { email } = this.state;
    return (
      //   ------Background image------
      <ImageBackground
        style={styles._container}
        source={require("./../../../assets/bg.jpeg")}
      >
        {/*   ------Logo view------  */}
        <View style={styles._header}>
          <Image
            source={require("./../../../assets/spiro-logo-white.png")}
            style={styles._logo_icon}
          />
        </View>
        <View style={styles._inner_layer}>
          {/*   ------Text------  */}
          <Text style={styles._title}>Spiro Like a Champ</Text>
          <Text style={styles._label}>Please enter your email address</Text>
          {/*   ------Email Input------  */}
          <TextInput
            placeholder="Email address"
            placeholderTextColor={theme.black}
            style={styles._input}
            value={email}
            onChangeText={(e) => this.setState({ email: e })}
          />
          {/*   ------Continue button------  */}
          <TouchableOpacity style={styles._btn} onPress={() => this.Continue()}>
            <Text style={styles._btn_text}>Continue</Text>
          </TouchableOpacity>

          {/*   ------Google button------  */}
          <TouchableOpacity
            style={[styles._btn, { backgroundColor: theme.black }]}
          >
            <Image
              source={require("./../../../assets/search.png")}
              style={styles._google_icon}
            />
            <Text style={styles._btn_text}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

//screen style
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 40,
    resizeMode: "cover",
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
  _google_icon: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  _btn_text: {
    color: theme.white,
    fontFamily: theme.TajawalBold,
  },
  _header: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  _inner_layer: {
    flex: 2,
  },
  _logo_icon: {
    height: 50,
    width: 50,
  },
  _title: {
    fontFamily: theme.extrabold,
    fontSize: 50,
    textAlign: "center",
    marginBottom: 20,
  },
  _label: {
    fontFamily: theme.TajawalBold,
    textAlign: "center",
    padding: 10,
    fontSize: 15,
  },
});
