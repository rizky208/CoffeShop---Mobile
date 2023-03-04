import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import commonStyle from '../../styles/commonStyle'

const commonStyle = StyleSheet.create({
    mt10: {
      marginTop: 20,
    },
    mlBase: {
      marginLeft: 50,
    },
  });
  
  const style = StyleSheet.create({
    title: {
      fontSize: 34,
      color: "#333",
      fontWeight: "700",
      marginTop: "15%",
    },
    subTitle: {
      fontSize: 28,
      color: "#333",
      fontWeight: "500",
      marginTop: "15%",
    },
    sectionTitle: {
      color: "#6A4029",
      fontSize: 17,
      fontWeight: "700",
    },
  });
  
  export default function App() {
    return (
      <View>
        <Text style={[commonStyle.mt10, style.title]}>Let's Goohh</Text>
        <StatusBar style="auto" />
      </View>
    );
  }