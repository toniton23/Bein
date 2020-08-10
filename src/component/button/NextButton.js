import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils";
import * as Animatable from "react-native-animatable";

const Backbutton = ({ text, onPress, color, nextAnimate }) => {
  return (
    <Animatable.View animation={nextAnimate} duration={2000}>
      <TouchableOpacity
        style={{
          height: 58,
          width: 245,
          borderRadius: 12,
          backgroundColor: color,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
        <Ionicons name="md-arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Backbutton;

const styles = StyleSheet.create({
  text: { fontSize: 16, color: "white", marginRight: 10 },
});
