import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../../utils";

const Button = ({ height, width, color, title, size, radius }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: color,
          borderRadius: radius,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: size, color: "white" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
