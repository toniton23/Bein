import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Avatar } from "../Avatar";
import { colors } from "../../utils";

const ListGroup = ({ pict, name, text, number, color }) => {
  return (
    <View style={styles.list}>
      <Text>{number}</Text>
      <View style={styles.avatar}>
        <Avatar
          pict={pict}
          width={50}
          height={50}
          radius={50 / 2}
          name={name}
          desc="1.2K     4/29 - 6/21"
          color={color}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>{text}</Text>
          <Entypo name="star" size={24} color={colors.secondary} />
        </View>
      </View>
    </View>
  );
};

export default ListGroup;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.default,
    marginRight: 10,
  },
  avatar: {
    width: "100%",
    height: 80,
    borderRadius: 20,
    borderWidth: 0.1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginLeft: 5,
  },
  list: { flexDirection: "row", alignItems: "center" },
});
