import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils";
import * as Animatable from "react-native-animatable";

const Backbutton = ({ onPress, backAnimate }) => {
  return (
    <Animatable.View animation={backAnimate} duration={2000}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Ionicons name="md-arrow-back" size={24} color={colors.default} />
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Backbutton;

const styles = StyleSheet.create({
  container: {
    height: 58,
    width: 58,
    borderRadius: 12,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
