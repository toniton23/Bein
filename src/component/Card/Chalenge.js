import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors, Run } from "../../utils";
import { Gap } from "../Gap";
import { Stat } from "../Stat";
import { TouchableOpacity } from "react-native-gesture-handler";

const Chalenge = ({ pict, title, author, caption, day, user, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.avatar}>
        <View style={styles.inner}>
          <Image source={pict} style={styles.pict} />
        </View>
      </View>
      <Gap height={12} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Gap height={10} />
      <Stat day={day} user={user} />
    </TouchableOpacity>
  );
};

export default Chalenge;

const styles = StyleSheet.create({
  caption: { fontSize: 12, color: colors.grey, textAlign: "center" },
  author: { fontSize: 12, color: colors.secondary },
  title: { fontSize: 15, fontWeight: "bold" },
  pict: {
    width: 66,
    height: 66,
    borderRadius: 66 / 2,
    position: "absolute",
    left: 3,
    bottom: 3,
  },
  inner: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    backgroundColor: "white",
    position: "absolute",
    left: 2,
    bottom: 2,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 76 / 2,
    backgroundColor: colors.default,
  },
  container: {
    width: 180,
    height: 270,
    borderRadius: 20,
    borderWidth: 0.2,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
    marginRight: 20,
  },
});
