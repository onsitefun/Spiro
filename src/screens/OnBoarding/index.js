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
    id: "11",
    image: require("./../../../assets/onboardingplaceholder.png"),
    title: "Explore Sessions",
    subtitle:
      "Explore quick sessions to energize and fly high or calm and wind down.",
  },
  {
    id: "22",
    image: require("./../../../assets/onboardingplaceholder.png"),
    title: "Dive Deep",
    subtitle:
      "Deep into the ins and outs with guided breathwork from top-notch facilitators.",
  },
  {
    id: "33",
    image: require("./../../../assets/onboardingplaceholder.png"),
    title: "Spiro with us",
    subtitle: "Journeys Inspired by soundscapes and music bites.",
  },
];
const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", width: width }}>
      <Image
        source={item.image}
        style={{ width: "60%", height: "80%", resizeMode: "contain" }}
      />
      <Text style={styles._title}>{item.title}</Text>
      <Text style={styles._subtitle}>{item.subtitle}</Text>
    </View>
  );
};

const OnBoarding = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

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

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
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
        <View style={{ marginBottom: 50 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles._btn}
                onPress={() => navigation.replace("Survey")}
              >
                <Text style={styles._btn_text}>Get Started</Text>
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.black }}>
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
      <Footer />
    </SafeAreaView>
  );
};

export default OnBoarding;

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
  _btn_text_skip: {
    fontSize: 15,
    color: theme.white,
    fontFamily: theme.TajawalBold,
    textTransform: "uppercase",
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
