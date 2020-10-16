
import "@expo/browser-polyfill";
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

import {
  cameraWithTensors,
  bundleResourceIO
} from "@tensorflow/tfjs-react-native";
// import * as ml5 from "ml5";
// import model from "./model";
import * as blazeface from "@tensorflow-models/blazeface";

console.disableYellowBox = true;

FileReader.prototype.readAsArrayBuffer = function(blob) {
  console.log("BLOB", blob);
  if (this.readyState === this.LOADING) throw new Error("InvalidStateError");
  this._setReadyState(this.LOADING);
  this._result = null;
  this._error = null;
  const fr = new FileReader();
  fr.onloadend = () => {
    const content = atob(
      fr.result.substr("data:application/octet-stream;base64,".length)
    );
    const buffer = new ArrayBuffer(content.length);
    const view = new Uint8Array(buffer);
    view.set(Array.from(content).map(c => c.charCodeAt(0)));
    this._result = buffer;
    this._setReadyState(this.DONE);
  };
  fr.readAsDataURL(blob);
};

const TensorCamera = cameraWithTensors(Camera);
// const modelJson = require('./model.js');
// console.log("modelJson", model)
// const modelWeights = require('./weights.bin');
// const modelUrl = RNFS.MainBundlePath + "/MegaRuddFP16.mlmodel";

// const classifier = ml5.imageClassifier("./model.json", modelLoaded);

export default () => {
  const [faces, setFaces] = useState([]);
  const [cameraRef, setCameraRef] = useState(null);
  const [predictImage, setPredictImage] = useState(null);
  const [croppedImages, setCroppedImages] = useState(null);
  // const [model, setModel] = useState(null);
  const [model, setModel] = useState(null);
  const [frameworkReady, setFrameworkReady] = useState(false);
  const [
    permission,
    askForPermission
  ] = Permissions.usePermissions(Permissions.CAMERA, { ask: true });

  const loadModel = async () => {
    console.log("loading model");
    // const model = await mobilenet.load({
    //   version: 1,
    //   modelUrl: "./model.json"
    // });
    // const model = await tf.loadLayersModel(
    //   bundleResourceIO(modelJson, modelWeights));
    // const tfModel = await tf.loadLayersModel(
    //   "https://teachablemachine.withgoogle.com/models/lNj2ao8Pz/model.json"
    // );
    const url = "https://teachablemachine.withgoogle.com/models/lNj2ao8Pz";
    const tfModel = await tmImage.load(
      url + "/model.json",
      url + "/metadata.json"
    );
    console.log("SUMMARY");
    // console.log(tfModel.summary());
    console.log("END SUMMARY");
    return tfModel;
  };

  useEffect(() => {
    if (!frameworkReady) {
      (async () => {
        await tf.ready();
        setModel(await loadModel());
        console.log("TF READY!");

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

    // console.log("tensor", tensor);
    // console.log("tensor shape", tensor.shape);

    //topk set to 1
    const prediction = await model.predict(tensor);
    // console.log(`prediction: ${JSON.stringify(prediction)}`);

    if (!prediction || prediction.length === 0) {
      return;
    }

    const data = await prediction.data();
    console.log("PREDICTION", data[0]);
    tf.dispose([tensor]);
  };

  const predict = async (data, faceProps) => {
    console.log("faces", data.uri);
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
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );
      console.log("crop", crop.uri);
      croppedimgs.push(crop);
      const prediction = await model.predict(crop);
      console.log(`prediction: ${JSON.stringify(prediction)}`);

      return crop;
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

  const handleCameraStream = imageAsTensors => {
    // console.log("imageAsTensors", imageAsTensors);
    const loop = async () => {
      const imgTensor = tf.tidy(() => {
        let imgTensor = imageAsTensors.next().value;
        imgTensor = tf.cast(imgTensor, "float32");
        imgTensor = imgTensor.expandDims(0);
        return imgTensor;
      });
      await getPrediction(imgTensor);
      requestAnimationFrameId = requestAnimationFrame(loop);
    };
    loop();
  };

  return (
    <View
      style={styles.container}
      onTouchEnd={() => {
        if (cameraRef) {
          // console.log(cameraRef);
          const takePic = async () => {
            cameraRef.pausePreview();
            const facesSnapshot = faces;
            const data = await cameraRef.takePictureAsync();
            console.log("data", data);
            setPredictImage(data.uri);
            predict(data, facesSnapshot);
          };
          takePic();
        }
      }}
    >
      {!!croppedImages &&
        croppedImages.length > 0 &&
        croppedImages.map(img => (
          <Image
            style={{ width: img.width, height: img.height }}
            source={{
              uri: img.uri
            }}
          />
        ))}
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
          minDetectionInterval: 1000,
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
