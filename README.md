# Rudd or Wrong

<p>
<img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
<img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
<img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

This app was built using React Native/Expo by Andrew McConnell. The
image classification model was built using scrapped data gathered
with the Image Downloader extension for Chrome, then preprocessed
through Python scripting, and finally built using Google Creative
Lab's Teachable Machine. The resulting Tensorflow model is loaded
onto the mobile device and fed cropped headshots of faces detected
by the camera to be classified.

There is still work being done to improve the accuracy of the
classifier.

## Demo
![](ruddorwrongdemo.gif)

## Resources
[Teachable Machine](https://teachablemachine.withgoogle.com)
[Image Downloader](https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj?hl=en-US)
[Deep Learning with React Native (iOS only) by Thomas Dittmar](https://dev.to/dittmarconsulting/deep-learning-with-react-native-ios-only-2470)
[Nic or Not](https://github.com/GantMan/nicornot)
[Paul Rudd for Face Model and Laffs](https://www.youtube.com/watch?v=FsaR0UCRh5Y)