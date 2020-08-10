import React from "react";
import { View, Text } from "react-native";

export default function dot({ height, width, color, radius }) {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: color,
        borderRadius: radius,
      }}
    />
  );
}
