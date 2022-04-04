// Dependencies
import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity,Text,Switch } from 'react-native';

import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-community/async-storage';

const SHOW_NOTIFICATIONS_KEY = 'notifications';
const SHOW_Email_NOTIFICATIONS_KEY = 'emailNotifications';

export default class Settings extends React.Component {

  constructor() {
    super();
    this.state = {
      showNotifications: false,
      showEmailNotifications: false,
    };
  }

  componentDidMount() {
    this.loadAsyncData();
  }

  loadAsyncData = async () => {
    try {
      const showNotifications = await AsyncStorage.getItem(SHOW_NOTIFICATIONS_KEY)
      if (showNotifications !== null) {
        this.setState({ showNotifications: JSON.parse(showNotifications) });
      }
    } catch (e) {
      console.log(e)
    }

    try {
      const showEmailNotifications = await AsyncStorage.getItem(SHOW_Email_NOTIFICATIONS_KEY)
      if (showEmailNotifications !== null) {
        this.setState({ showEmailNotifications: JSON.parse(showEmailNotifications) });
      }
    } catch (e) {
      console.log(e)
    }
    
  }

  storeNotification = async (key, showNotifications) => {
    try {
      await AsyncStorage.setItem(SHOW_NOTIFICATIONS_KEY, JSON.stringify(showNotifications));
      this.setState({ showNotifications });
    } catch (e) {
      console.log(e);
    }
  }

  storeEmailNotification = async (key, showEmailNotifications) => {
    try {
      await AsyncStorage.setItem(SHOW_Email_NOTIFICATIONS_KEY, JSON.stringify(showEmailNotifications));
      this.setState({ showEmailNotifications });
    } catch (e) {
      console.log(e);
    }
  }

  render(){

      return (
        
       <SafeAreaView style={styles.container}>
        <View style={styles._header}>
          <TouchableOpacity onPress={pressHandler}>
            <View style={styles._back_btn}>
              <Ionicons
                name="chevron-back-outline"
                size={26}
                color={theme.white}
              />
              <Text style={styles.text}>Notification Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
          <View style={styles.container}>

           <View style={styles.content_container}>
             <Text style={styles.content_subtitle}>Helpful Notifications</Text>
             <Switch
             trackColor={{false: theme.lightGrey, true: theme.appGreen}}
             thumbColor={theme.white}
             ios_backgroundColor={theme.lightGrey}
             onValueChange={(showNotifications) => {
                this.storeNotification(SHOW_NOTIFICATIONS_KEY, showNotifications);
                console.log(showNotifications)
              }}
             value={this.state.showNotifications}
             ></Switch>
           </View>
           <Text style={styles.content_text} >Support, inspiration and reminders to keep your practice going.</Text>


           <View style={styles.content_container}>
             <Text style={styles.content_subtitle}>Mail Newsletter</Text>
             <Switch
             trackColor={{false: theme.lightGrey, true: theme.appGreen}}
             thumbColor={theme.white}
             ios_backgroundColor={theme.lightGrey}
             onValueChange={(showEmailNotifications) => {
                this.storeEmailNotification(SHOW_Email_NOTIFICATIONS_KEY, showEmailNotifications);
                console.log(showEmailNotifications)
              }}
             value={this.state.showEmailNotifications}
             ></Switch>
           </View>
           <Text style={styles.content_text} >Support, inspiration and news, just in your mail.</Text>

          </View>
      </SafeAreaView>
    );
            }
          }

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
  },
  content: {
    flex: 1,
    backgroundColor: theme.black,
  },
  content_container: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
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
  content_subtitle: {
    color: theme.white,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  content_text: {
    color: theme.lightGrey,
    marginLeft: 35,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 26,
  },
  _back_btn:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

// export default class Settings extends React.Component {

//    constructor(props) {
//      super(props);
//      this.state = 
//      {
//         isEnabled : true,
//       };
//    }
  
//    toggleSwitch = () => {
//        this.state({ isEnabled : !this.state.isEnabled });
//    }
//function Settings({ navigation }, props){


  // const[notificationsIsEnabled, setNotificationsIsEnabled] = useState(boolean);
  // const[mailNewsletterIsEnabled, setMailNewsletterIsEnabled] = useState(boolean);

  // const toggleSwitchNotifications = () => {
  //     // setNotificationsIsEnabled(!notificationsIsEnabled);
  //     setNotificationsIsEnabled(previousState => !previousState);
  //  //   notificationsIsEnabled(!previousState);
  //  };
  //  const toggleSwitchMailNewsletter = () => {
  //      //setMailNewsletterIsEnabled(!mailNewsletterIsEnabled);
  //      setMailNewsletterIsEnabled(previousState => !previousState);
  //     // mailNewsletterIsEnabled(!previousState);
  //  };

  //  const pressHandler = () => {
  //      navigation.navigate('Profile')
  //  };