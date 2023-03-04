import React from "react";
import {
  Pressable,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
} from "react-native";
import commonStyle from "../../styles/commonStyle";

const style = StyleSheet.create({
  flexCenter: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    marginTop: "2%",
  },
  subTitle: {
    marginTop: "1%",
  },
  sectionTitle: {
    marginTop: "20%",
  },
  sectionContent: {
    marginTop: "10%",
  },
  button: {
    height: 40,
    marginTop: 4,
    marginBottom: 30,
    borderBottomWidth: 2,
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    marginTop: 4,
    marginBottom: 30,
    borderBottomWidth: 2,
    padding: 10,
    borderColor: "#9F9F9F",
  },
  buttonwrap: {
    height: 40,
    marginTop: 30,
    marginBottom: 30,
  },
});

const CheckoutScreen = () => {
  return (
    <View style={commonStyle.bg}>
        <Text
          style={[
            commonStyle.black,
            commonStyle.bold,
            commonStyle.XL,
            style.title,
          ]}
        >
          Checkout
        </Text>
        <Text
          style={[
            commonStyle.black,
            commonStyle.semiBold,
            commonStyle.L,
            style.sectionTitle,
          ]}
        >
          Delivery info
        </Text>
        <Text
          style={[
            commonStyle.grey,
            commonStyle.semiBold,
            commonStyle.M,
            style.subTitle,
          ]}
        >
          Delivered only on monday until friday from 1 pm to 7 pm
        </Text>
        <Text
          style={[
            commonStyle.black,
            commonStyle.semiBold,
            commonStyle.L,
            style.sectionContent,
          ]}
        >
          Description
        </Text>
        <Text
          style={[
            commonStyle.grey,
            commonStyle.semiBold,
            commonStyle.M,
            style.subTitle,
          ]}
        >
          Cold brewing is a method of brewing that combines ground coffee and
          cool water and uses time instead of heat to extract the flavor. It is
          brewed in small batches and steeped for as long as 48 hours.
        </Text>
        <View style={[style.buttonwrap]}>
          <Button
            color="#6A4029"
            title="ADD TO CART"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
    </View>
  );
};

export default CheckoutScreen;
