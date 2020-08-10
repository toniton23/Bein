import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../../utils";
import { color } from "react-native-reanimated";

const Avatar = ({ pict, width, height, radius, name, desc, color }) => {
  return (
    <View style={styles.container}>
      <Image
        source={pict}
        style={{
          width: width,
          height: height,
          borderRadius: radius,
          marginRight: 10,
        }}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={{ fontSize: 12, color: color }}>{desc}</Text>
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  name: { fontSize: 16, fontWeight: "500" },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
