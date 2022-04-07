import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Slider from "react-native-slider";
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

    this._loadNewPlaybackInstance(playing);
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
        <Slider
          // style={styles.playbackSlider}
          value={this._getSeekSliderPosition()}
          onValueChange={this._onSeekSliderValueChange}
          onSlidingComplete={this._onSeekSliderSlidingComplete}
          thumbTintColor="white"
          minimumTrackTintColor="#FFFFFF6A"
          disabled={this.state.isLoading}
        />
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
              <AntDesign
                name="playcircleo"
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
});
