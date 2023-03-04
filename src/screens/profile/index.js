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
    fontSize: 28,
    fontWeight: "700",
    marginTop: "2%",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: "1%",
  },
  sectionTitle: {
    color: "#6A4029",
    fontSize: 17,
    fontWeight: "700",
  },
  // button: {
  //   height: 40,
  //   marginTop: 4,
  //   marginBottom: 30,
  //   borderBottomWidth: 2,
  //   padding: 10,
  //   backgroundColor: "#fff",
  // },
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
    marginTop: 4,
    marginBottom: 30,
  },
});

const ProfileScreen = () => {
  const [number, onChangeNumber] = React.useState("");
  const [text, onChangeText] = React.useState("");
  return (
    <View style={commonStyle.bg}>
      <Image
        source={require("../../images/profilefoto.png")}
        style={{
          width: "100%",
          marginTop: 20,
          marginBottom: 20,
          resizeMode: "contain",
        }}
      />
      <Pressable>
        <Image
          source={require("../../images/editbtn.png")}
          style={{
            width: "100%",
            position: "absolute",
            resizeMode: "contain",
            left: 30,
            top: -55,
          }}
        />
      </Pressable>
      <View style={[style.flexCenter]}>
        <Text style={[commonStyle.brown, style.title]}>Zulaikha</Text>
        <Text style={[commonStyle.brown, style.subTitle]}>
          zulaikha17@gmail.com
        </Text>
        <Text style={[commonStyle.brown, style.subTitle]}>+62 81348287878</Text>
        <Text style={[commonStyle.brown, style.subTitle]}>
          Iskandar Street Block A Number 102
        </Text>
      </View>
      <ScrollView style={commonStyle.mt2per}>
        <SafeAreaView>
          <Text style={[commonStyle.grey, style.subTitle]}>Name</Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            placeholder="Fill Your Name"
            value={text}
          />
          <Text style={[commonStyle.grey, style.subTitle]}>Email</Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            placeholder="Fill Your Email"
            value={text}
          />
          <Text style={[commonStyle.grey, style.subTitle]}>Phone Number</Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Fill Your Phone"
            keyboardType="numeric"
          />
          <Text style={[commonStyle.grey, style.subTitle]}>Date of Birth</Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            placeholder="DD/MM/YY"
            value={text}
          />
          <Text style={[commonStyle.grey, style.subTitle]}>
            Delivery Address
          </Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            placeholder="Fill Your Delivery Location"
            value={text}
          />
          <View style={[style.buttonwrap]}>
            <Button
              color="#6A4029"
              title="SUBMIT"
              onPress={() => Alert.alert("Simple Button pressed")}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
