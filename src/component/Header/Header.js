import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({ title, desc, onPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.View}>{desc}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  View: { fontSize: 15, color: colors.grey },
  text: { fontSize: 20, fontWeight: "bold", color: colors.default },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
