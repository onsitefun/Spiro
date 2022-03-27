import React from "react";
import {
  View,
  TouchableOpacity, // button wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "./../../../theme";

const { width, height } = Dimensions.get("window");
const slides = [
  {
    id: "44",
    image: require("./../../../assets/onboardingplaceholder.png"),
    title: "How can Spiro help you?",
    subtitle: "This will help us suggest best practice for you.",
  },
  {
    id: "55",
    image: require("./../../../assets/onboardingplaceholder.png"),
    title: "When do you go to bed?",
    subtitle:
      "Spiro can help you unwind and find calm for a full night's sleep.",
  },
  {
    id: "66",
    image: require("./../../../assets/onboardingplaceholder.png"),
    title: "What time do you get up?",
    subtitle: "Spiro can help you feel awake, alert and energized.",
  },
];

const Survey = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  var spiroHelpYou = "";
  var sleepTime = "";
  var wakeupTime = "";
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skipSlides = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Indicator = () => {
    return (
      <View
        style={{
          height: height * 0.1,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles._indicator,
                currentSlideIndex == index && {
                  backgroundColor: theme.white,
                  width: 20,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const FooterButtons = () => {
    return (
      <View
        style={{
          height: height * 0.1,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginBottom: 50 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ flexDirection: "row" }}>
              {/* <TouchableOpacity style={styles._btn_skip} onPress={skipSlides}>
                <Text style={styles._btn_text_skip}>Skip</Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} /> */}
              <TouchableOpacity
                style={styles._btn}
                onPress={navigation.replace("GettingStart")}
              >
                <Text style={styles._btn_text}>Done!</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles._btn_skip} onPress={skipSlides}>
                <Text style={styles._btn_text_skip}>Skip</Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity style={styles._btn} onPress={goToNextSlide}>
                <Text style={styles._btn_text}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const FourButtons = ({}) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={styles._btn_survey}>
            <Image
              source={require("./../../../assets/relax.png")}
              style={styles._btn_image_survey}
            />
            <Text style={styles._btn_text_survey}>to feel relxed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles._btn_survey}>
            <Image
              source={require("./../../../assets/sleep.png")}
              style={styles._btn_image_survey}
            />
            <Text style={styles._btn_text_survey}>to fall asleep</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={styles._btn_survey}>
            <Image
              source={require("./../../../assets/energy.png")}
              style={styles._btn_image_survey}
            />
            <Text style={styles._btn_text_survey}>to increase energy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles._btn_survey}>
            <Image
              source={require("./../../../assets/performance.png")}
              style={styles._btn_image_survey}
            />
            <Text style={styles._btn_text_survey}>to improve performance</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Slide = ({ item }) => {
    return (
      <View style={{ alignItems: "center", width: width }}>
        <Text style={styles._title}>{item.title}</Text>
        <Text style={styles._subtitle}>{item.subtitle}</Text>
        {currentSlideIndex == 0 ? (
          <FourButtons />
        ) : (
          <Image
            source={item.image}
            style={{ width: "60%", height: "80%", resizeMode: "contain" }}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.black }}>
      <Indicator />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        contentContainerStyle={{ height: height * 0.6 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <FooterButtons />
    </SafeAreaView>
  );
};

export default Survey;

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
    flex: 1,
    backgroundColor: theme.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 8,
  },
  _btn_survey: {
    backgroundColor: theme.white,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 180,
    width: 120,
    padding: 10,
    margin: 10,
  },
  _btn_skip: {
    flex: 1,
    backgroundColor: theme.black,
    borderColor: theme.white,
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 8,
  },
  _btn_text: {
    fontSize: 15,
    color: theme.black,
    fontFamily: theme.TajawalBold,
    textTransform: "uppercase",
  },
  _btn_text_survey: {
    fontSize: 15,
    textAlign: "center",
    color: theme.black,
    fontFamily: theme.TajawalBold,
    textTransform: "capitalize",
  },
  _btn_text_skip: {
    fontSize: 15,
    color: theme.white,
    fontFamily: theme.TajawalBold,
    textTransform: "uppercase",
  },
  _btn_image_survey: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 20,
  },
  _title: {
    color: theme.white,
    fontSize: 30,
    fontFamily: theme.TajawalBold,
    marginTop: 20,
    textAlign: "center",
  },
  _subtitle: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.regular,
    marginTop: 10,
    maxWidth: "70%",
    lineHeight: 23,
    marginBottom: 10,
    textAlign: "center",
  },
  _indicator: {
    height: 10,
    width: 10,
    backgroundColor: theme.greyLight,
    marginHorizontal: 3,
    borderRadius: 10,
  },
});
