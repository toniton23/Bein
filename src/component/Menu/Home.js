import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils/color/colors";
import { Text } from "native-base";

const Home = ({ onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.press}>
      <Ionicons name="md-home" size={34} color={color} />
      {/* <Text style={{ marginTop: -5, marginBottom: 15 }}>{label}</Text> */}
    </TouchableOpacity>
  );
};

export default Home;

const styles = StyleSheet.create({
  press: {
    alignItems: "center",
    justifyContent: "center",
  },
});
