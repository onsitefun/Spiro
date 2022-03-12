import React from "react";
import {
  View,
  TouchableOpacity, // button wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert, // alert dialog with the specified title and message
  ImageBackground,
} from "react-native";
import theme from "./../../../theme";

export default class EnterPin extends React.Component {
  constructor() {
    super();
    this.state = {
      pin: "",
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
    let { pin, err } = this.state;
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
          <Text style={[styles._label, { fontSize: 17, textAlign: "center" }]}>
            We've sent a pin to super.shahad1@gmail.com {"\n \n"}
            Check your spam folder if you don't receive it.
          </Text>
          {/*   ------Pin Input------  */}
          <TextInput
            placeholder="Enter pin"
            placeholderTextColor={theme.black}
            style={[
              styles._input,
              { borderColor: err !== "" ? theme.err : theme.black },
            ]}
            value={pin}
            onChangeText={(e) => this.setState({ pin: e, err: "" })}
          />
          <Text style={styles._err}>{this.state.err}</Text>
          {/*   ------Sign In button------  */}
          <TouchableOpacity
            style={[styles._btn, { marginBottom: 0 }]}
            onPress={() => this.SignIn()}
          >
            <Text style={styles._btn_text}>Sign in</Text>
          </TouchableOpacity>
          {/*   ------Need another pin button------  */}
          <Text style={styles._label} onPress={() => this.resendPin()}>
            I need another pin
          </Text>
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
    backgroundColor: theme.btnBg,
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
  _inner_layer: {
    flex: 2,
  },
  _logo_icon: {
    height: 50,
    width: 50,
  },

  _label: {
    fontFamily: theme.TajawalBold,
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    marginBottom: 20,
    marginTop: 50,
  },
  _err: {
    color: theme.err,
    fontFamily: theme.regular,
    fontSize: 12,
  },
});
