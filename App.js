import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CameraView } from "./src/components/CameraView";
import { PredictView } from "./src/components/PredictView";
import { AboutView } from "./src/components/AboutView";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

console.disableYellowBox = true;

const Predict = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="camera"
      component={CameraView}
      options={{ title: "Rudd Or Wrong" }}
    />
    <Stack.Screen
      name="evaluator"
      component={PredictView}
      options={{ title: "Prediction", headerBackTitle: "Back" }}
    />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Predict") {
            iconName = "ios-camera" 
          } else if (route.name === "About") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Predict" component={Predict} />
      <Tab.Screen name="About" component={AboutView} />
    </Tab.Navigator>
  </NavigationContainer>
);
