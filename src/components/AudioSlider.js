import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  Image,
} from "react-native";
// import Slider from "react-native-slider";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../theme";

class PlaylistItem {
  constructor(name, uri, image) {
    this.name = name;
    this.uri = uri;
    this.image = image;
  }
}

const PLAYLIST = [
  new PlaylistItem(
    "Comfort Fit - “Sorry”",
    "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3",
    "https://facebook.github.io/react/img/logo_og.png"
  ),
];

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
const FONT_SIZE = 14;
const LOADING_STRING = "Loading...";

export default class AudioSlider extends Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.playbackInstance = null;
    this.state = {
      playbackInstanceName: LOADING_STRING,
      playbackInstancePosition: null,
      playbackInstanceDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isBuffering: false,
      isLoading: true,
      fontLoaded: true,
      volume: 1.0,
      rate: 1.0,
      portrait: null,
      modalVisible: false,
      //sliderValue: 0,
    };
  }

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    (async () => {
      this.setState({ fontLoaded: true });
    })();

    this._loadNewPlaybackInstance(false);
  }

  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }

    const source = { uri: PLAYLIST[this.index].uri };
    const initialStatus = {
      shouldPlay: playing,
      rate: this.state.rate,
      volume: this.state.volume,
    };

    const { sound, status } = await Audio.Sound.create(
      source,
      initialStatus,
      this._onPlaybackStatusUpdate
    );
    this.playbackInstance = sound;

    this._updateScreenForLoading(false);
  }

  _updateScreenForLoading(isLoading) {
    if (isLoading) {
      this.setState({
        isPlaying: false,
        playbackInstanceName: LOADING_STRING,
        playbackInstanceDuration: null,
        playbackInstancePosition: null,
        isLoading: true,
      });
    } else {
      this.setState({
        playbackInstanceName: PLAYLIST[this.index].name,
        portrait: PLAYLIST[this.index].image,
        isLoading: false,
      });
    }
  }

  _onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        volume: status.volume,
      });
      if (status.didJustFinish) {
        this._advanceIndex(true);
        this._updatePlaybackInstanceForIndex(true);
      }
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  _advanceIndex(forward) {
    this.index =
      (this.index + (forward ? 1 : PLAYLIST.length - 1)) % PLAYLIST.length;
  }

  async _updatePlaybackInstanceForIndex(playing) {
    this._updateScreenForLoading(true);
    this.setState({ modalVisible: true });
    // this._loadNewPlaybackInstance(playing);
  }

  _onPlayPausePressed = () => {
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        this.playbackInstance.pauseAsync();
      } else {
        this.playbackInstance.playAsync();
      }
    }
  };

  _onStopPressed = () => {
    if (this.playbackInstance != null) {
      this.playbackInstance.stopAsync();
    }
  };

  _onVolumeSliderValueChange = (value) => {
    if (this.playbackInstance != null) {
      this.playbackInstance.setVolumeAsync(value);
    }
  };

  _trySetRate = async (rate) => {
    if (this.playbackInstance != null) {
      try {
        await this.playbackInstance.setRateAsync(rate);
      } catch (error) {
        // Rate changing could not be performed, possibly because the client's Android API is too old.
      }
    }
  };

  _onSeekSliderValueChange = (value) => {
    if (this.playbackInstance != null && !this.isSeeking) {
      this.isSeeking = true;
      this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
      this.playbackInstance.pauseAsync();
    }
  };

  _onSeekSliderSlidingComplete = async (value) => {
    if (this.playbackInstance != null) {
      this.isSeeking = false;
      const seekPosition = value * this.state.playbackInstanceDuration;
      if (this.shouldPlayAtEndOfSeek) {
        this.playbackInstance.playFromPositionAsync(seekPosition);
      } else {
        this.playbackInstance.setPositionAsync(seekPosition);
      }
    }
  };

  NextState = () => {
    if (this.playbackInstance != null) {
      this.isSeeking = false;
      const seekPosition = 0.02 * this.state.playbackInstanceDuration;
      if (this.shouldPlayAtEndOfSeek) {
        this.playbackInstance.playFromPositionAsync(seekPosition);
      } else {
        this.playbackInstance.setPositionAsync(seekPosition);
      }
    }
  };

  _getSeekSliderPosition() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return (
        this.state.playbackInstancePosition /
        this.state.playbackInstanceDuration
      );
    }
    return 0;
  }

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = (number) => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  _getTimestamp() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return this._getMMSSFromMillis(this.state.playbackInstancePosition);
    }
    return "";
  }

  render() {
    return !this.state.fontLoaded ? (
      <View />
    ) : (
      <View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: theme.TajawalBold,
                    fontSize: 22,
                    paddingBottom: 20,
                  }}
                >
                  Rate your experience!
                </Text>
                <View style={styles._rating_row}>
                  <TouchableOpacity
                    style={[
                      styles._rating_view,
                      { backgroundColor: "#448D54" },
                    ]}
                    onPress={() => this.setState({ modalVisible: false })}
                  >
                    <Image
                      source={require("./../../assets/one.png")}
                      style={styles._rating_icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles._rating_view,
                      { backgroundColor: "#83A251" },
                    ]}
                    onPress={() => this.setState({ modalVisible: false })}
                  >
                    <Image
                      source={require("./../../assets/two.png")}
                      style={styles._rating_icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles._rating_view,
                      { backgroundColor: "#B5A94D" },
                    ]}
                    onPress={() => this.setState({ modalVisible: false })}
                  >
                    <Image
                      source={require("./../../assets/three.png")}
                      style={styles._rating_icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles._rating_view,
                      { backgroundColor: "#B5854D" },
                    ]}
                    onPress={() => this.setState({ modalVisible: false })}
                  >
                    <Image
                      source={require("./../../assets/four.png")}
                      style={styles._rating_icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles._rating_view,
                      { backgroundColor: "#B54D4D" },
                    ]}
                    onPress={() => this.setState({ modalVisible: false })}
                  >
                    <Image
                      source={require("./../../assets/five.png")}
                      style={styles._rating_icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => this.setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={[styles.text]}>
            {this._getTimestamp()}
            {/* {this.state.isBuffering ? BUFFERING_STRING : this._getTimestamp()} */}
          </Text>
          <Text style={[styles.text]}>
            {this._getMMSSFromMillis(this.state.playbackInstanceDuration)}
          </Text>
        </View>

        {/* <View style={[styles.playbackContainer]}> */}
        {/* <MultiSlider
          // values={this._getSeekSliderPosition()}
          onValuesChange={this._onSeekSliderValueChange}
          onValuesChangeFinish={this._onSeekSliderSlidingComplete}
        /> */}
        <Slider
          // style={styles.playbackSlider}
          value={this._getSeekSliderPosition()}
          onValueChange={this._onSeekSliderValueChange}
          onSlidingComplete={this._onSeekSliderSlidingComplete}
          thumbTintColor="white"
          minimumTrackTintColor="#FFFFFF6A"
          disabled={this.state.isLoading}
        />
        {/* <Slider
          // style={styles.playbackSlider}
          value={this._getSeekSliderPosition()}
          onValueChange={this._onSeekSliderValueChange}
          onSlidingComplete={this._onSeekSliderSlidingComplete}
          thumbTintColor="white"
          minimumTrackTintColor="#FFFFFF6A"
          disabled={this.state.isLoading}
        /> */}
        {/* </View> */}
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Foundation name="previous" size={24} color={theme.white} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPlayPausePressed}
            disabled={this.state.isLoading}
            style={{ alignSelf: "center", marginTop: 10, marginBottom: 40 }}
          >
            {this.state.isPlaying ? (
              <MaterialIcons
                name="pause-circle-outline"
                size={74}
                color={theme.white}
                style={{ marginHorizontal: 20 }}
              />
            ) : (
              <MaterialIcons
                name="play-circle-outline"
                size={74}
                color={theme.white}
                style={{ marginHorizontal: 20 }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Foundation name="next" size={24} color={theme.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 300,
  },
  portraitContainer: {
    // marginTop: 80,
  },
  portrait: {
    height: 200,
    width: 200,
  },
  detailsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  playbackSlider: {
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: FONT_SIZE,
    minHeight: FONT_SIZE,
    color: theme.white,
    fontFamily: theme.TajawalBold,
  },

  rateSlider: {
    width: DEVICE_WIDTH - 80,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000070",
  },
  modalView: {
    margin: 10,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 20,

    shadowColor: "#000",

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  _rating_row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  _rating_view: {
    flex: 1,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
  },
});
