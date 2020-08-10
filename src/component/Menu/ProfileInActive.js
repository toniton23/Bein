import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../utils/color/colors";

const ProfileMenu = ({ onPress, label }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <FontAwesome name="user-circle-o" size={34} color={colors.secondary} />
      {/* <Text style={{ marginTop: -5, marginBottom: 15 }}>{label}</Text> */}
    </TouchableOpacity>
  );
};

export default ProfileMenu;

const styles = StyleSheet.create({
  Profile: { width: 44, height: 44, borderRadius: 44 / 2 },
});
