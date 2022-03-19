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
import theme from "../../../theme";

export default class LoginOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }

  Continue = () => {
    this.props.navigation.navigate("EnterPin");
  };

  SignInWithEmail = () => {
    this.props.navigation.navigate("Login");
  };

  GoToRegisterPage = () => {
    this.props.navigation.navigate("GettingStart");
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
        <View>
          {/*   ------Text------  */}
          <Text style={styles._title}>Spiro Like a Champ</Text>
        </View>
        <View style={styles._inner_layer}>
          {/*   ------Email button------  */}
          <TouchableOpacity
            style={[styles._btn, { backgroundColor: theme.black }]}
            onPress={() => this.SignInWithEmail()}
          >
            <Image
              source={require("./../../../assets/email.png")}
              style={styles._btn_icon}
            />
            <Text style={styles._btn_text}>Sign in with Email</Text>
          </TouchableOpacity>
          {/*   ------Google button------  */}
          <TouchableOpacity
            style={[styles._btn, { backgroundColor: theme.black }]}
          >
            <Image
              source={require("./../../../assets/search.png")}
              style={styles._btn_icon}
            />
            <Text style={styles._btn_text}>Sign in with Google</Text>
          </TouchableOpacity>
          {/*   ------Apple button------  */}
          <TouchableOpacity
            style={[styles._btn, { backgroundColor: theme.black }]}
          >
            <Image
              source={require("./../../../assets/apple.png")}
              style={styles._btn_icon}
            />
            <Text style={styles._btn_text}>Sign in with Apple</Text>
          </TouchableOpacity>
          <View style={styles._text_btn_view}>
            <Text style={styles._text_btn_question}>New here?</Text>
            <Text
              style={styles._text_btn}
              onPress={() => this.GoToRegisterPage()}
            >
              Create an account
            </Text>
          </View>
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
    marginBottom: 10,
    borderRadius: 8,
  },
  _btn_icon: {
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
  _text_btn_view: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  _text_btn_question: {
    fontSize: 18,
    fontFamily: theme.regular,
  },
  _text_btn: {
    paddingLeft: 5,
    fontSize: 18,
    fontFamily: theme.TajawalBold,
  },
});
