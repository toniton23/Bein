import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils/color/colors";

const Message = ({ onPress, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginRight: -30,
      }}
    >
      <Ionicons name="ios-chatbubbles" size={34} color={color} />
      {/* <Text style={{ marginTop: -5, marginBottom: 15 }}>{label}</Text> */}
    </TouchableOpacity>
  );
};

export default Message;
