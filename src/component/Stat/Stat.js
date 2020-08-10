import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { colors } from "../../utils";

const Stat = ({ day, user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.clock}>
        <Ionicons name="md-clock" size={16} color={colors.grey} />
        <Text style={styles.text}>{day}</Text>
      </View>
      <View style={styles.user}>
        <FontAwesome name="user" size={16} color={colors.grey} />
        <Text style={styles.text}>{user}</Text>
      </View>
    </View>
  );
};

export default Stat;

const styles = StyleSheet.create({
  user: { flexDirection: "row", alignItems: "center" },
  clock: { marginRight: 15, flexDirection: "row", alignItems: "center" },
  text: { fontSize: 12, marginLeft: 5 },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
