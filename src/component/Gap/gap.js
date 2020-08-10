import React from "react";
import { View } from "react-native";

const Gap = ({ height, width, color, radius }) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: color,
        borderRadius: radius,
      }}
    ></View>
  );
};

export default Gap;
