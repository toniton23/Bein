import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Like = ({ color, text }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          backgroundColor: color,
          marginRight: 10,
        }}
      ></View>
      <Text style={{ fontSize: 12, fontWeight: "bold", color: color }}>
        {text}
      </Text>
    </View>
  );
};

export default Like;

const styles = StyleSheet.create({});
