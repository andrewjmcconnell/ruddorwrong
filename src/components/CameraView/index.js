import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions,
  Image,
  ActivityIndicator
} from "react-native";

import * as ImageManipulator from "expo-image-manipulator";
import { Camera } from "expo-camera";
import { Identifier } from "react-native-identifier";
import * as FaceDetector from "expo-face-detector";
import uuid from "react-native-uuid";
import * as Permissions from "expo-permissions";
import * as tf from "@tensorflow/tfjs";
import {
  getModel,
  convertBase64ToTensor,
  startPrediction
} from "../../../utils";

export const CameraView = props => {
  const [faces, setFaces] = useState([]);
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [showShutterButton, setShowShutterButton] = useState(false);
  const [model, setModel] = useState(null);
  const [frameworkReady, setFrameworkReady] = useState(false);
  const [
    permission,
    askForPermission
  ] = Permissions.usePermissions(Permissions.CAMERA, { ask: true });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");

      if (!frameworkReady) {
        await tf.ready();
        setModel(await getModel());

        setFrameworkReady(true);
      }
    })();
  }, []);

  if (!frameworkReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!permission || permission.status !== "granted") {
    return (
      <View style={{ margin: 50 }}>
        <Text>Permission is not granted</Text>
        <Button title="Grant permission" onPress={askForPermission} />
      </View>
    );
  }

  const handlePictureProcessing = async () => {
    const facesSnapshot = faces;
    const data = await cameraRef.takePictureAsync({
      quality: 1
    });
    predict(data, facesSnapshot);
  };

  const processFace = async (data, face) => {
    const { width } = Dimensions.get("window");
    const scale = data.width / width;
    const crop = await ImageManipulator.manipulateAsync(
      data.uri,
      [
        {
          crop: {
            originX: scale * face.bounds.origin.x,
            originY: scale * face.bounds.origin.y,
            width: scale * face.bounds.size.width,
            height: scale * face.bounds.size.height
          }
        },
        {
          resize: {
            width: 224,
            height: 224
          }
        }
      ],
      { compress: 1, format: ImageManipulator.SaveFormat.JPEG, base64: true }
    );
    const tensor = await convertBase64ToTensor(crop);
    const typedArray = await startPrediction(model, tensor);
    const predictions = Array.from(typedArray);
    // console.log(`rudd: ${predictions[0]}, wrong: ${predictions[1]}`);

    return {
      ...crop,
      className: predictions[0] > predictions[1] ? "Rudd" : "Wrong",
      probability:
        predictions[0] > predictions[1] ? predictions[0] : predictions[1]
    };
  };

  const predict = async (data, faceProps) => {
    if (faceProps.length == 0) {
      return;
    }
    let croppedimgs = await Promise.all(
      faceProps.map(face => processFace(data, face))
    );
    if (croppedimgs.length > 0) {
      props.navigation.navigate("evaluator", { evaluatedImages: croppedimgs });
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Camera
          ref={ref => {
            setCameraRef(ref);
          }}
          style={{
            ...styles.cameraView,
            zIndex: -1
          }}
          type={Camera.Constants.Type.back}
          whiteBalance={Camera.Constants.WhiteBalance.auto}
          onCameraReady={() => setShowShutterButton(true)}
          faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.Landmarks.none,
            runClassifications: FaceDetector.Constants.Classifications.none,
            minDetectionInterval: 100,
            tracking: true
          }}
          onFacesDetected={face => {
            setFaces(face.faces);
          }}
        >
          <View style={styles.cameraView}>
            {!!faces &&
              faces.length > 0 &&
              faces.map(face => {
                return (
                  <Identifier
                    key={uuid.v4()}
                    horizontal
                    accuracy={0}
                    style={{
                      position: "absolute",
                      left: face.bounds.origin.x,
                      top: face.bounds.origin.y,
                      width: face.bounds.size.width,
                      height: face.bounds.size.height,
                      marginTop: -20
                    }}
                  />
                );
              })}
            {showShutterButton && (
              <TouchableOpacity
                style={styles.shutterButton}
                onPress={handlePictureProcessing}
              >
                <Text style={styles.shutterButtonText}>Find Paul</Text>
              </TouchableOpacity>
            )}
          </View>
        </Camera>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = {
  safeArea: {
    backgroundColor: "#4d089a"
  },
  cameraView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  shutterButton: {
    position: "absolute",
    bottom: 0,
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    marginBottom: 20
  },
  shutterButtonText: {
    fontSize: 18,
    color: "white"
  }
};

CameraView.options = {
  statusBar: {
    backgroundColor: null
  },
  topBar: {
    title: {
      text: "Take a picture",
      color: "white"
    },
    background: {
      color: "#4d089a"
    }
  },
  tapBar: {
    background: {
      color: "#4d089a"
    }
  }
};
