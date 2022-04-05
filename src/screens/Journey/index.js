import React ,{ useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
 import { BlurView } from 'expo-blur';
import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// function checkSubscription()  {
//     const [isSubscribed, setIsSubscribed] = useState(false);
//     if(isSubscribed) return true;
//     else return false;
//   }
const isSubscribed_KEY = 'isSubscribed';
export default class Journey extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isSubscribed: false,
   };
  }

  componentDidMount() {
    this.loadAsyncData();
  }

  loadAsyncData = async () => {
    try {
      const isSubscribed = await AsyncStorage.getItem(isSubscribed_KEY)
      if (isSubscribed !== null) {
        this.setState({ isSubscribed: JSON.parse(isSubscribed) });
      }
    } catch (e) {
      console.log(e)
    }
  }

  storeNotification = async (key, isSubscribed) => {
    try {
      await AsyncStorage.setItem(isSubscribed_KEY, JSON.stringify(isSubscribed));
      this.setState({ isSubscribed });
    } catch (e) {
      console.log(e);
    }
  }

  render() {

    let sessions = [
      {
        title: "Title title title",
        img: "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixid=MnwxMDEzNjV8MHwxfHNlYXJjaHw2fHxyZWxheHxlbnwwfHx8fDE2NDE5MDc0NDU&ixlib=rb-1.2.1&utm_source=Glide&utm_medium=referral&w=164&h=164&dpr=2&fit=crop&auto=format",
        day: "DAY 1",
      },
      {
        title: "Title title title",
        img: "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixid=MnwxMDEzNjV8MHwxfHNlYXJjaHw2fHxyZWxheHxlbnwwfHx8fDE2NDE5MDc0NDU&ixlib=rb-1.2.1&utm_source=Glide&utm_medium=referral&w=164&h=164&dpr=2&fit=crop&auto=format",
        day: "DAY 2",
      },
      {
        title: "Title title title",
        img: "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixid=MnwxMDEzNjV8MHwxfHNlYXJjaHw2fHxyZWxheHxlbnwwfHx8fDE2NDE5MDc0NDU&ixlib=rb-1.2.1&utm_source=Glide&utm_medium=referral&w=164&h=164&dpr=2&fit=crop&auto=format",
        day: "DAY 3",
      },
      {
        title: "Title title title",
        img: "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixid=MnwxMDEzNjV8MHwxfHNlYXJjaHw2fHxyZWxheHxlbnwwfHx8fDE2NDE5MDc0NDU&ixlib=rb-1.2.1&utm_source=Glide&utm_medium=referral&w=164&h=164&dpr=2&fit=crop&auto=format",
        day: "DAY 4",
      },
      {
        title: "Title title title",
        img: "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixid=MnwxMDEzNjV8MHwxfHNlYXJjaHw2fHxyZWxheHxlbnwwfHx8fDE2NDE5MDc0NDU&ixlib=rb-1.2.1&utm_source=Glide&utm_medium=referral&w=164&h=164&dpr=2&fit=crop&auto=format",
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
          <Text style={styles._header_title}>Title title title</Text>
        </View>

        <ImageBackground style={styles._thumbnail}>
          <Text style={styles._thumbnail_title}>Title title title</Text>
          <Text style={styles._thumbnail_title_secondary}>10 Sessions</Text>
        </ImageBackground>
        {this.state.isSubscribed ? 
        <ScrollView >
        
        
          <Text style={styles._desc}>
            Lorem ipsum dolor sit amet. Aut repellat omnis sit galisum beatae
            sit debitis quaerat qui officiis explicabo. Ea dolores
            exercitationem. pin
          </Text>
          <Text style={styles._sesion_title}>Sessions</Text>

          <View>
            {sessions.map((val, i) => {
              return (
                <View key={i} style={styles._sescion}>
                  <View style={styles._section_data}>
                    <Image
                      source={{ uri: val.img }}
                      style={styles._sesion_image}
                    />
                    <View>
                      <Text style={styles._sesion_title}>{val.title}</Text>
                      <Text style={styles._sesion_day}>{val.day}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("PlaySession")
                    }
                  >
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color={theme.white}
                    />
                  </TouchableOpacity>
                </View>
              );
            })} 
 
          </View>
        
        </ScrollView>
        : <ScrollView >

          <Text style={styles._desc}>
            Lorem ipsum dolor sit amet. Aut repellat omnis sit galisum beatae
            sit debitis quaerat qui officiis explicabo. Ea dolores
            exercitationem. pin
          </Text>
          <Text style={styles._sesion_title}>Sessions</Text>

          <View>
            {sessions.map((val, i) => {
              return (
                <View key={i} style={styles._sescion}>
                
                  <View style={styles._section_data}>
                  
                    <Image
                      source={{ uri: val.img }}
                      style={styles._sesion_image_unsubscribed}
                    />
                    <View>
                      <Text style={styles._sesion_title_unsubscribed}>{val.title}</Text>
                      <Text style={styles._sesion_day_unsubscribed}>{val.day}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                   // onPress={() =>}
                  >
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color={theme.lighterGrey}
                    />
                  </TouchableOpacity>
                 
                </View>
              );
            })} 

          </View>
           
         {
             this.state.isSubscribed ?
              null
              : //<BlurView intensity={70} tint={"dark"}>
                <View style={styles._inner_layer}>
                    {/* <View style={styles.upper_layer} /> */}
                      <TouchableOpacity style={styles._btn} onPress={() => this.props.navigation.navigate("Trial")}>
                       <Text style={styles.box_text2}>Start Journey</Text>
                      </TouchableOpacity>
                    
                </View>
          
             // </BlurView> 
            }
        
        </ScrollView>}
          
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
    marginRight: 40,
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
    height: 200,
    backgroundColor: theme.grey,
    borderRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
    paddingLeft: 20,
    marginTop: 30,
  },
  _thumbnail_title: {
    fontFamily: theme.TajawalBold,
    color: theme.white,
    textTransform: "uppercase",
  },
  _thumbnail_title_secondary: {
    fontFamily: theme.regular,
    color: theme.white,
    textTransform: "capitalize",
  },
  _desc: {
    color: theme.white,
    fontFamily: theme.medium,
    marginVertical: 20,
  },
  _sesion_title: {
    color: theme.white,
    fontFamily: theme.TajawalBold,
    fontSize: 22,
  },
  _sesion_day: {
    color: theme.white,
    fontFamily: theme.TajawalBold,
  },
  _sesion_image: {
    height: 67,
    width: 67,
    borderRadius: 100,
    marginRight: 10,
  },
  _sesion_title_unsubscribed: {
    color: theme.lighterGrey,
    fontFamily: theme.TajawalBold,
    fontSize: 22,
  },
  _sesion_day_unsubscribed: {
    color: theme.lighterGrey,
    fontFamily: theme.TajawalBold,
  },
  _sesion_image_unsubscribed: {
    height: 67,
    width: 67,
    borderRadius: 100,
    marginRight: 10,
    opacity: 0.4,
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
  upper_layer: {
  //  flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
   // flexDirection: "row",
    //paddingTop: 150,
   // bottom: 5,
   // paddingBottom:10,
  //  backgroundColor: 'rgba(0,0,0,0.2)',
   // marginBottom:100,
   // position: 'absolute',
  //  width: Dimensions.get("window").width ,
  },
  _inner_layer: {
    flex: 1,
    flexDirection: "row",
     //height: 500,
   // width: Dimensions.get("window").width,
   // alignItems: "flex-end",
  },
    _btn: {
    flex: 1,
    backgroundColor: theme.appGreen,
  //  flexDirection: "row",
    //justifyContent: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom:10,
    borderRadius: 8,
  },
    box_text2: {
    color: theme.black,
  //  marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    marginBottom: 5
  },
});
