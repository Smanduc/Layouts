import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            // flexDirection: "row",
            alignItems: "flex-start",
            backgroundColor: "red",
            top: 15,
          }}
        >
          <Text>LOGO</Text>
        </View>
        <View
          style={{
            // flexDirection: "row",
            padding: 30,
            flex: 3,
            backgroundColor: "green",
            top: 15,
          }}
        >
          <Text>Website Heading</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "yellow",
          padding: 20,
          top: 15,
        }}
      >
        <Text>MENU</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "blue",
              top: 15,
              padding: 40,
              flex: 1,
            }}
          >
            <Text>SECTION 1</Text>
          </View>
          <View
            style={{
              backgroundColor: "grey",
              top: 15,
              padding: 40,
              flex: 1,
            }}
          >
            <Text>SECTION 2</Text>
          </View>
          <View
            style={{
              backgroundColor: "pink",
              top: 15,
              padding: 40,
              flex: 1,
            }}
          >
            <Text>SECTION 3</Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "lime",
              top: 15,
              padding: 72,
              height: 500,
            }}
          >
            <Text>PAGE CONTENTS</Text>
          </View>
          <View
            style={{
              backgroundColor: "brown",
              top: 15,
              padding: 40,
              alignItems: "flex-end",
            }}
          >
            <Text>SIDE BAR</Text>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            backgroundColor: "teal",
            top: 15,
            padding: 10,
            alignItems: "stretch",
          }}
        >
          <Text>PAGE FOOTER</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BoxScreen;

// style={{ backgroundColor: "red", flex: 1, flexDirection: "row" }}
