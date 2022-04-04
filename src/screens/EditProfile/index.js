import React from 'react';
import { Alert, SafeAreaView, View, StyleSheet, TouchableOpacity,Text,TextInput } from 'react-native';

import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-community/async-storage';

const First_Name_Key = 'firstName';
const Last_Name_Key = 'lastName';
export default class EditProfile extends React.Component {

  constructor() {
    super();
    this.state = {
      first_name: "John",
      last_name: "Doe",
    };
  }

  showAlert = () => {  
    console.log('showAlert');
        Alert.alert(  
            'Deleting Account',  
            'Are you sure you want to delete your account?',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );  
    };  
  // changeName = (firstName, lastName) => {
  //   // var first = this.state.first_name;
  //   // var last = this.state.last_name;
  //   this.setState({ first_name: firstName});
  //   this.setState({ last_name: lastName });
  // //  console.log('changeName');
  // };

  componentDidMount() {
    this.loadAsyncData();
  }

  loadAsyncData = async () => {
    try {
      const first_name = await AsyncStorage.getItem(First_Name_Key)
      if (first_name !== null) {
        this.setState({ first_name: JSON.parse(first_name) });
      }
    } catch (e) {
      console.log(e)
    }

    try {
      const last_name = await AsyncStorage.getItem(Last_Name_Key)
      if (last_name !== null) {
        this.setState({ last_name: JSON.parse(last_name) });
      }
    } catch (e) {
      console.log(e)
    }
  }

  storeFirstName = async (key, first_name) => {
    try {
      await AsyncStorage.setItem(First_Name_Key, JSON.stringify(first_name));
      this.setState({ first_name });
    } catch (e) {
      console.log(e);
    }
  }
  storeLastName = async (key, last_name) => {
    try {
      await AsyncStorage.setItem(Last_Name_Key, JSON.stringify(last_name));
      this.setState({ last_name });
    } catch (e) {
      console.log(e);
    }
  }

  render(){

      return (
       <SafeAreaView style={styles._container}>
        <View style={styles._header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles._back_btn}>
              <Ionicons
                name="chevron-back-outline"
                size={26}
                color={theme.white}
              />
              <Text style={styles.text}>Edit Profile</Text>
            </View>
          </TouchableOpacity>
</View>
          <View style={styles._inner_layer}>
          <View style={{marginTop:15,marginBottom: 10,}}>
          
          {/*   ------FIRST NAME------  */}
          <Text style={styles._title} >First Name</Text>
          <TextInput
            placeholder="First Name"
            placeholderTextColor={theme.lightGrey}
            style={styles._input}
            value={this.state.first_name}
            onChangeText={(first_Name) => {this.storeFirstName(First_Name_Key, first_Name);
            console.log(first_Name)
            }}
          />
          {/*   ------LAST NAME------  */}
          <Text style={styles._title} >Last Name</Text>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={theme.lightGrey}
            style={styles._input}
            value={this.state.last_name}
            onChangeText={(last_name) => {this.storeLastName(Last_Name_Key, last_name);
            console.log(last_name)
            }}
          />
          {/*   ------SAVE button------  */}
          <TouchableOpacity style={styles._btn} onPress={() => {}}>
            <Text style={styles._btn_text}>Save</Text>
          </TouchableOpacity>

          {/*   ------DELETE button------  */}
          <TouchableOpacity style={styles._btn} onPress={() => this.showAlert()}>
            <Text style={styles._btn_text}>Delete Account</Text>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
      );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: theme.black,
  },
  content: {
    flex: 1,
    backgroundColor: theme.black,
  },
  _header: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: theme.white,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
   _input: {
    backgroundColor: theme.white,
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.black,
    padding: 10,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: theme.TajawalBold,
  },
  _btn: {
    backgroundColor: theme.btnBg,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: 5,
    borderRadius: 8,
  },
  _back_btn:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  _btn_text: {
    color: theme.white,
    fontFamily: theme.TajawalBold,
  },
  _label: {
    fontFamily: theme.TajawalBold,
    textAlign: "center",
    padding: 10,
    fontSize: 15,
  },
  _title: {
    fontFamily: theme.TajawalBold,
    color: theme.white,
    fontSize: 18,
    textAlign: "left",
    marginBottom: 20,
    marginLeft: 22,
  },
  _inner_layer: {
    flex: 2,
  },
});

