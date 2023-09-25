import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BoxScreen from "./src/Components/BoxScreen";

export default function App() {
  return (
    <BoxScreen />
    // <View style={styles.container}>
    //   <Text>Layouts</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
