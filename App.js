// import "@expo/browser-polyfill";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Button,
  Image,
  Dimensions
} from "react-native";
import * as FileSystem from "expo-file-system";
import { decode as atob } from "base-64";
import * as ImageManipulator from "expo-image-manipulator";

import { Camera } from "expo-camera";
import { Identifier } from "react-native-identifier";
import * as Permissions from "expo-permissions";

import * as FaceDetector from "expo-face-detector";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tmImage from "@teachablemachine/image";

import firebase from "./config/firebase";
import uuid from "react-native-uuid";

import {
  cameraWithTensors,
  bundleResourceIO
} from "@tensorflow/tfjs-react-native";
import {
  getModel,
  convertBase64ToTensor,
  startPrediction,
  populateData
} from "./utils";

console.disableYellowBox = true;

export default () => {
  const [faces, setFaces] = useState([]);
  const [cameraRef, setCameraRef] = useState(null);
  const [predictImage, setPredictImage] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [croppedImages, setCroppedImages] = useState(null);
  // const [model, setModel] = useState(null);
  const [model, setModel] = useState(null);
  const [frameworkReady, setFrameworkReady] = useState(false);
  const [
    permission,
    askForPermission
  ] = Permissions.usePermissions(Permissions.CAMERA, { ask: true });

  async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase
      .storage()
      .ref()
      .child(uuid.v4());
    const snapshot = await ref.put(blob);

    blob.close();

    return await snapshot.ref.getDownloadURL();
  }

  useEffect(() => {
    if (!frameworkReady) {
      (async () => {
        await tf.ready();
        setModel(await getModel());
        console.log("TF READY!");

        setFrameworkReady(true);
      })();
    }
  }, []);

  if (!permission || permission.status !== "granted" || !frameworkReady) {
    return (
      <View style={{ margin: 50 }}>
        <Text>Permission is not granted</Text>
        <Button title="Grant permission" onPress={askForPermission} />
      </View>
    );
  }

  const predict = async (data, faceProps) => {
    if (faceProps.length == 0) {
      return;
    }

    const scale = data.height / Dimensions.get("window").height;

    // create a cropped image for each face
    let croppedimgs = [];
    let _ = await faceProps.map(async face => {
      // console.log("face", face);
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
      // console.log("crop", crop);
      // croppedimgs.push(crop);
      const tensor = await convertBase64ToTensor(crop);
      const typedArray = await startPrediction(model, tensor);
      const predictions = Array.from(typedArray);
      console.log(`rudd: ${predictions[0]}, wrong: ${predictions[1]}`);
      croppedimgs.push({
        ...crop,
        className: predictions[0] > predictions[1] ? "Rudd" : "Wrong",
        probability:
          predictions[0] > predictions[1] ? predictions[0] : predictions[1]
      });
    });

    setCroppedImages(croppedimgs);

    // const prediction = await model.predict(predictImage);
    // // console.log(`prediction: ${JSON.stringify(prediction)}`);

    // if (!prediction || prediction.length === 0) {
    //   return;
    // }

    // const data = await prediction.data();
    // console.log("PREDICTION", data[0]);
  };

  return (
    <View
      style={styles.container}
      onTouchEnd={() => {
        if (cameraRef) {
          // console.log(cameraRef);
          const takePic = async () => {
            // cameraRef.pausePreview();
            const facesSnapshot = faces;
            const data = await cameraRef.takePictureAsync({
              quality: 0.1,
              fixOrientation: true
            });
            // const croppedData = await cropPicture(data)
            setPredictImage(data.uri);
            predict(data, facesSnapshot);
            // here
          };
          takePic();
        }
      }}
    >
      {!!croppedImages &&
        croppedImages.length > 0 &&
        croppedImages.map(img => (
          <View
            key={`${img.className}-${img.probability}`}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{ width: img.width, height: img.height }}
              source={{
                uri: img.uri
              }}
            />
            <Text>
              {img.className}, probability: {img.probability}
            </Text>
          </View>
        ))}
      {!!faces &&
        faces.length > 0 &&
        faces.map(face => {
          return (
            <Identifier
              key={uuid.v4()}
              horizontal
              accuracy={0.5}
              style={{
                position: "absolute",
                left: face.bounds.origin.x,
                top: face.bounds.origin.y,
                width: face.bounds.size.width,
                height: face.bounds.size.height,
                marginTop: -10
              }}
            />
          );
        })}
      <Camera
        ref={ref => {
          setCameraRef(ref);
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
        type={Camera.Constants.Type.back}
        faceDetectorSettings={{
          mode: FaceDetector.Constants.Mode.fast,
          detectLandmarks: FaceDetector.Constants.Landmarks.all,
          runClassifications: FaceDetector.Constants.Classifications.none,
          minDetectionInterval: 100,
          tracking: true
        }}
        onFacesDetected={face => {
          setFaces(face.faces);
        }}
        // Tensor props
        // cameraTextureHeight={textureDims.height}
        // cameraTextureWidth={textureDims.width}
        // resizeHeight={224}
        // resizeWidth={224}
        // resizeDepth={3}
        // onReady={handleCameraStream}
        // autorender={false}
      ></Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
