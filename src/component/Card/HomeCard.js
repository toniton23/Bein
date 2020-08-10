import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Dot } from "../dot";
import { Gap } from "../Gap";
import { Avatar } from "../Avatar";
import { Like } from "../Like";
import { colors } from "../../utils";

const HomeCard = ({
  image,
  caption,
  author,
  title,
  number,
  width,
  height,
  radius,
  pict,
  name,
  desc,
  numb,
  nom,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Avatar
          width={width}
          height={height}
          radius={radius}
          pict={pict}
          name={name}
          desc={desc}
        />

        <View style={styles.dot}>
          <Dot width={6} height={6} radius={6 / 2} color={colors.grey} />
          <Gap width={5} />
          <Dot width={6} height={6} radius={6 / 2} color={colors.grey} />
          <Gap width={5} />
          <Dot width={6} height={6} radius={6 / 2} color={colors.grey} />
        </View>
      </View>
      <Gap height={18} />
      <Image source={image} style={styles.pict} />
      <Gap height={15} />
      <Text style={styles.caption}>{title}</Text>
      <View style={styles.author}>
        <Text style={styles.by}>by</Text>
        <Text style={styles.nama}>{author}</Text>
      </View>
      <Gap height={5} />
      <Text style={styles.kata}>{caption}</Text>
      <Gap height={10} />
      <View style={styles.like}>
        <View style={styles.heart}>
          <Like color={colors.default} text={number} />
          <Ionicons
            name="md-heart-empty"
            size={24}
            color="white"
            style={{ position: "absolute", bottom: 7, left: 10 }}
          />
        </View>

        <View style={styles.chat}>
          <Like color={colors.grey} text={numb} />
          <MaterialCommunityIcons
            name="chat-outline"
            size={24}
            color="white"
            style={{ position: "absolute", bottom: 7, left: 8 }}
          />
        </View>
        <View style={styles.eye}>
          <AntDesign name="eye" size={24} color={colors.grey} />
          <Text>{nom}</Text>
        </View>
      </View>
      <Gap height={15} />
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  eye: { flexDirection: "row", fontSize: 12, color: colors.grey },
  chat: { flex: 1 },
  heart: { marginRight: 10 },
  like: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  kata: { fontSize: 15, fontWeight: "300", color: "#0A1034" },
  nama: { fontSize: 12, color: colors.default },
  by: { fontSize: 12, marginRight: 5 },
  author: { flexDirection: "row" },
  caption: { fontSize: 15, color: colors.secondary, fontWeight: "500" },
  pict: { width: "100%", height: 206, borderRadius: 20 },
  dot: { flexDirection: "row" },
  title: { flex: 1 },

  avatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    paddingHorizontal: 20,
    paddingTop: 20,
    borderWidth: 0.1,
    borderRadius: 40,
  },
});
