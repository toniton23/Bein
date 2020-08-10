import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils/color/colors";

const Find = ({ color, onPress }) => {
  const [active, setActive] = useState(false);
  const Press = () => {
    setActive(!active);
  };
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -30,
      }}
    >
      <Ionicons
        name="md-search"
        size={34}
        color={active ? colors.default : colors.purple1}
      />
      {/* <Text style={{ marginTop: -5, marginBottom: 15 }}>{label}</Text> */}
    </TouchableOpacity>
  );
};

export default Find;
