import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils";

const Back = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="ios-arrow-back" size={24} color={colors.default} />
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({});
