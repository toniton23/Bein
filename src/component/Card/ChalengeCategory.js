import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ChallengeCategory = ({ title, pict, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: color,
          width: 230,
          height: 130,
          borderRadius: 20,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 10,
          marginRight: 20,
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Image source={pict} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default ChallengeCategory;

const styles = StyleSheet.create({
  image: { width: 100, height: 100, borderRadius: 20 },
  title: { color: "white", fontSize: 15 },
});
