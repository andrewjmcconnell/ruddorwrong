import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Button
} from "react-native";
import * as Linking from "expo-linking";

const Resource = ({ url, title }) => {
  const _handlePress = () => {
    Linking.openURL(url);
    // this.props.onPress && this.props.onPress();
  };

  return <Button title={title} onPress={_handlePress} style={styles.text} />;
};

export const AboutView = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.headerText}>About this App</Text>
          <Text style={styles.text}>
            This app was built using React Native/Expo by Andrew McConnell. The
            image classification model was built using scrapped data gathered
            with the Image Downloader extension for Chrome, then preprocessed
            through Python scripting, and finally built using Google Creative
            Lab's Teachable Machine. The resulting Tensorflow model is loaded
            onto the mobile device and fed cropped headshots of faces detected
            by the camera to be classified.
          </Text>
          <Text style={styles.text}>
            There is still work being done to improve the accuracy of the
            classifier.
          </Text>
          <Text style={styles.text}>
            The following resources were used for references:
          </Text>
          <Resource
            title="Teachable Machine"
            url="https://teachablemachine.withgoogle.com"
          />
          <Resource
            title="Image Downloader"
            url="https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj?hl=en-US"
          />
          <Resource
            title="Deep Learning with React Native (iOS only) by Thomas Dittmar"
            url="https://dev.to/dittmarconsulting/deep-learning-with-react-native-ios-only-2470"
          />
          <Resource
            title="Nic or Not"
            url="https://github.com/GantMan/nicornot"
          />
          <Resource
            title="Paul Rudd for Face Model and Laffs"
            url="https://www.youtube.com/watch?v=FsaR0UCRh5Y"
          />
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = {
  safeArea: {
    backgroundColor: "white"
  },
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 40,
    display: "flex",
    flexDirection: "column"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#4d089a",
    margin: 20
  },
  text: {
    fontSize: 18,
    marginTop: 20
  }
};
