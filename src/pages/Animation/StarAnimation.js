import React, { useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import * as Animatable from "react-native-animatable";
import { Easing } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

const StarAnimation = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeftBig"
        duration={3000}
        delay={4000}
        style={{ width: "100%", height: "10%", backgroundColor: "blue" }}
      ></Animatable.View>
      <Animatable.View
        animation="fadeInDownBig"
        duration={3000}
        style={{ width: "100%", height: "40%", backgroundColor: "tomato" }}
      ></Animatable.View>
      <Animatable.View
        animation="fadeInUpBig"
        duration={3000}
        style={{ width: "100%", height: "40%", backgroundColor: "lightgreen" }}
      ></Animatable.View>
      <Animatable.View
        duration={3000}
        transition={(0, (100)[[, 2000]])}
        style={styles.bottom}
      >
        <TouchableOpacity>
          <View style={styles.ball}></View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default StarAnimation;

const styles = StyleSheet.create({
  ball: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "yellow",
  },
  bottom: { width: "100%", height: "10%", backgroundColor: "red" },
  container: { flex: 1, backgroundColor: "yellow" },
});
