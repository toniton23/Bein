import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function info({
  title,
  desc,
  size,
  color,
  font,
  fontw,
  weight,
  col,
}) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: size, fontWeight: weight, color: col }}>
        {title}
      </Text>
      <Text style={{ fontSize: font, fontWeight: fontw, color: color }}>
        {desc}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
