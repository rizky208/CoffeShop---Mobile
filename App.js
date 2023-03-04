import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import HomeScreen from "./src/screens/home";
import Detailproduct from "./src/screens/detailProduct";
import ProfileScreen from "./src/screens/profile";
import CheckoutScreen from "./src/screens/checkout";
//end screens

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // initialRouteName
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={Detailproduct}
          options={{ title: "Detail Product" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "profile" }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ title: "Checkout" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
