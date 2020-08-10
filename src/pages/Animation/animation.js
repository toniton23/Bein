import React, { useState } from "react";
import { View, Animated, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Gap } from "../../component";

const animation = () => {
  const opacity = useState(new Animated.Value(0))[0];
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
  const leftValue = useState(new Animated.View(0))[0];

  function moveStar() {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 2000,
    }).start();
  }

  function moveBall() {
    Animated.timing(value, {
      toValue: { x: 100, y: 100 },
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }

  function fadeInBall() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  function fadeOutBall() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Animated.View style={value.getLayout()}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              backgroundColor: "blue",
            }}
          ></View>
        </Animated.View>
        <TouchableOpacity onPress={moveBall}>
          <Text>MOve Ball</Text>
        </TouchableOpacity>

        <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              opacity,
              borderRadius: 100 / 2,
              backgroundColor: "red",
            },
          ]}
        ></Animated.View>
        <TouchableOpacity onPress={fadeInBall}>
          <Text>Fade in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fadeOutBall}>
          <Text>Fade out</Text>
        </TouchableOpacity>
        <Gap height={20} />
      </View>
    </View>
  );
};

export default animation;

const styles = StyleSheet.create({
  button: { backgroundColor: "skyblue", width: 80, height: 30, marginTop: 20 },
});
