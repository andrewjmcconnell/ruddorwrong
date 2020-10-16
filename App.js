import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, Text, View, Button, LogBox } from "react-native";
// import RNFS from "react-native-fs";
import { Camera } from "expo-camera";
import { Identifier } from "react-native-identifier";
import * as Permissions from "expo-permissions";

import * as FaceDetector from "expo-face-detector";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import {
  cameraWithTensors,
  bundleResourceIO
} from "@tensorflow/tfjs-react-native";
// import * as ml5 from "ml5";
// import model from "./model";
import * as blazeface from "@tensorflow-models/blazeface";

console.disableYellowBox = true;

const TensorCamera = cameraWithTensors(Camera);
// const modelJson = require('./model.js');
// console.log("modelJson", model)
// const modelWeights = require('./weights.bin');
// const modelUrl = RNFS.MainBundlePath + "/MegaRuddFP16.mlmodel";

// const classifier = ml5.imageClassifier("./model.json", modelLoaded);

export default () => {
  const [faces, setFaces] = useState([]);
  // const [model, setModel] = useState(null);
  const [mobilenetModel, setMobilenetModel] = useState(null);
  const [frameworkReady, setFrameworkReady] = useState(false);
  const [
    permission,
    askForPermission
  ] = Permissions.usePermissions(Permissions.CAMERA, { ask: true });

  const loadMobileNetModel = async () => {
    console.log("loading mobilenet");
    // const model = await mobilenet.load({
    //   version: 1,
    //   modelUrl: "./model.json"
    // });
    // const model = await tf.loadLayersModel(
    //   bundleResourceIO(modelJson, modelWeights));
    const model = await tf.loadLayersModel(
      "https://teachablemachine.withgoogle.com/models/lNj2ao8Pz/model.json"
    );
    console.log("SUMMARY");
    console.log(model.summary());
    console.log("END SUMMARY");
    return model;
  };

  useEffect(() => {
    if (!frameworkReady) {
      (async () => {
        //check permissions
        // const { status } = await Camera.requestPermissionsAsync();
        // console.log(`permissions status: ${status}`);
        // setHasPermission(status === "granted");

        //we must always wait for the Tensorflow API to be ready before any TF operation...
        await tf.ready();
        setMobilenetModel(await loadMobileNetModel());
        // const blazeModel = await blazeface.load();
        // setModel(blazeModel);
        console.log("TF READY!");

        //load the mobilenet model and save it in state
        // setMobilenetModel(await loadMobileNetModel());

        setFrameworkReady(true);
      })();
    }
  }, []);

  // console.log("permisson", permission);

  if (!permission || permission.status !== "granted" || !frameworkReady) {
    return (
      <View style={{ margin: 50 }}>
        <Text>Permission is not granted</Text>
        <Button title="Grant permission" onPress={askForPermission} />
      </View>
    );
  }

  let textureDims;
  if (Platform.OS === "ios") {
    textureDims = {
      height: 1920,
      width: 1080
    };
  } else {
    textureDims = {
      height: 1200,
      width: 1600
    };
  }

  const getPrediction = async tensor => {
    if (!tensor) {
      return;
    }

    console.log("tensor", tensor);
    console.log("tensor shape", tensor.shape);

    //topk set to 1
    const prediction = await mobilenetModel.predict(tensor, { verbose: true });
    console.log(`prediction: ${JSON.stringify(prediction)}`);

    if (!prediction || prediction.length === 0) {
      return;
    }

    console.log("PREDICTION", prediction);
  };

  const handleCameraStream = imageAsTensors => {
    const loop = async () => {
      const imgTensor = tf.tidy(() => {
        let imgTensor = imageAsTensors.next().value;
        imgTensor = tf.cast(imgTensor, "float32");
        imgTensor = imgTensor.expandDims(0);
        return imgTensor;
      });

      // const nextImageTensor = await imageAsTensors.next().value;
      await getPrediction(
        imageAsTensors.next().value.reshape([null, 224, 224, 3])
      );
      // console.log(nextImageTensor);
      // console.log(nextImageTensor);
      // const predictions = await model.estimateFaces(nextImageTensor);
      // console.log("predictions", predictions);
      // await setFaces(predictions);
      // console.log("predictions", predictions);
      // await getPrediction(nextImageTensor);
      requestAnimationFrameId = requestAnimationFrame(loop);
    };
    loop();
  };

  return (
    <View style={styles.container}>
      {!!faces &&
        faces.length > 0 &&
        faces.map(face => {
          return (
            <Identifier
              key={face.faceId}
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
      <TensorCamera
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
          minDetectionInterval: 1000,
          tracking: true
        }}
        onFacesDetected={face => {
          setFaces(face.faces);
        }}
        // Tensor props
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeHeight={200}
        resizeWidth={152}
        resizeDepth={3}
        onReady={handleCameraStream}
        autorender={false}
      ></TensorCamera>
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
