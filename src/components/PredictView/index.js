import React from "react";
import { SafeAreaView, View, Text, StatusBar, Image } from "react-native";

const renderLabel = className =>
  className === "Rudd" ? "You found Paul Rudd!" : "This isn't Paul";

export const PredictView = ({ route }) => {
  const { evaluatedImages } = route.params;
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {!!evaluatedImages &&
            evaluatedImages.length > 0 &&
            evaluatedImages.map(img => (
              <View
                key={`${img.className}-${img.probability}`}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  style={{ width: img.width, height: img.height }}
                  source={{
                    uri: img.uri
                  }}
                />
                <Text>{renderLabel(img.className)}</Text>
                <Text>Probability: {img.probability}</Text>
              </View>
            ))}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = {
  safeArea: {
    backgroundColor: "#4d089a"
  },
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "white"
  }
};
