import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import theme from "./theme";
import Navigation from "../Spiro/src/navigation";
import "react-native-gesture-handler";

export default function App(props) {
  let [fontsLoaded] = useFonts({
    TajawalBlack: require("../Spiro/assets/Fonts/Tajawal-Black.ttf"),
    TajawalBold: require("../Spiro/assets/Fonts/Tajawal-Bold.ttf"),
    TajawalExtraBold: require("../Spiro/assets/Fonts/Tajawal-ExtraBold.ttf"),
    TajawalExtraLight: require("../Spiro/assets/Fonts/Tajawal-ExtraLight.ttf"),
    TajawalLight: require("../Spiro/assets/Fonts/Tajawal-Light.ttf"),
    TajawalMedium: require("../Spiro/assets/Fonts/Tajawal-Medium.ttf"),
    TajawalRegular: require("../Spiro/assets/Fonts/Tajawal-Regular.ttf"),
  });

<<<<<<< HEAD
import Share from 'react-native-share';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          
          <View style={{marginLeft: 0}}>
            <Title style={[styles.title, {marginTop:5,marginBottom: 0,}]}>
            Profile
            </Title>
          </View>

        </View>

      </View>
 
      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 0
          }]}>

            <Title>10</Title>
            <Caption>Streak Days</Caption>
          </View>

          <View style={styles.infoBox}>
            <Title>240</Title>
            <Caption>Total Minutes</Caption>
          </View>
          
          <View style={styles.infoBox}>
            <Title>20</Title>
            <Caption>Sessions</Caption>
          </View>

      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={styles}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Share Your Achievements</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={History}>
          <View style={styles.menuItem}>
            <Icon name="history" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Sessions History</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="cog" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#0000',
    borderBottomWidth: 1,
    borderTopColor: '#0000',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
=======
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigation />;
  }
}
const styles = StyleSheet.create({});
>>>>>>> master2
