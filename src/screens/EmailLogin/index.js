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
import { Ionicons } from "@expo/vector-icons";
import theme from "./../../../theme";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      err: "",
    };
  }

  SignIn = () => {
    let { err, pin } = this.state;
    if (pin === "") {
      this.setState({ err: "Wrong Pin" });
    } else {
      this.props.navigation.navigate("Home");
    }
  };
  resendPin = () => {
    this.props.navigation.goBack();
    // Alert.alert("Send Pin successfully");
  };

  render() {
    let { email, password, err } = this.state;
    return (
      //   ------Background image------
      <ImageBackground
        style={styles._container}
        source={require("./../../../assets/bg.jpeg")}
      >
        {/*   ------Back Button------  */}
        <View style={styles._header_back}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles._back_btn}>
              <Ionicons
                name="chevron-back-outline"
                size={26}
                color={theme.white}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/*   ------Logo view------  */}
        <View style={styles._header}>
          <Image
            source={require("./../../../assets/spiro-logo-white.png")}
            style={styles._logo_icon}
          />
        </View>
        <View style={styles._inner_layer}>
          {/*   ------Text------  */}
          <Text style={styles._label}>Welcome Back</Text>
          {/*   ------Email Input------  */}
          <TextInput
            placeholder="Email address"
            placeholderTextColor={theme.black}
            style={[
              styles._input,
              { borderColor: err !== "" ? theme.err : theme.black },
            ]}
            value={email}
            onChangeText={(e) => this.setState({ email: e, err: "" })}
          />
          <Text style={styles._err}>{this.state.err}</Text>
          {/*   ------Password Input------  */}
          <TextInput
            placeholder="Password"
            placeholderTextColor={theme.black}
            secureTextEntry={true}
            style={[
              styles._input,
              { borderColor: err !== "" ? theme.err : theme.black },
            ]}
            value={password}
            onChangeText={(e) => this.setState({ password: e, err: "" })}
          />
          <Text style={styles._err}>{this.state.err}</Text>
          {/*   ------Sign In button------  */}
          <TouchableOpacity
            style={[styles._btn, { marginBottom: 0 }]}
            onPress={() => this.SignIn()}
          >
            <Text style={styles._btn_text}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

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
    fontFamily: theme.TajawalBold,
  },
  _btn: {
    backgroundColor: theme.black,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: 20,
    borderRadius: 8,
    marginTop: 50,
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
  _header_back: {
    flexDirection: "row",
    alignItems: "center",
  },
  _inner_layer: {
    flex: 2,
  },
  _logo_icon: {
    height: 50,
    width: 50,
  },

  _label: {
    fontFamily: theme.TajawalBold,
    fontSize: 30,
    marginBottom: 20,
    marginTop: 50,
  },
  _err: {
    color: theme.err,
    fontFamily: theme.regular,
    fontSize: 12,
  },
});
