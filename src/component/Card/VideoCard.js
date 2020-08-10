import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Gap } from "../../component";
import { colors, Yo, Zes, Zas, Zos } from "../../utils";
import { Avatar } from "../Avatar";

const VideoCard = ({ pict }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={pict} style={styles.pict} />
      </View>
      <Gap height={20} />
      <Text style={styles.title}>Summer Shred Challenge</Text>
      <View style={styles.author}>
        <Text style={styles.by}>by</Text>
        <Text style={styles.name}>Tina Schwan</Text>
      </View>
      <Gap height={5} />
      <View style={styles.avatar}>
        <Avatar height={36} width={36} radius={36 / 2} pict={Zes} />
        <View style={{ marginLeft: -28 }}>
          <Avatar height={36} width={36} radius={36 / 2} pict={Zas} />
        </View>
        <View style={{ marginLeft: -28 }}>
          <Avatar height={36} width={36} radius={36 / 2} pict={Zos} />
        </View>
        <Text style={styles.part}>19K Participants</Text>
      </View>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  part: { fontSize: 15, color: colors.grey },
  avatar: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: { fontWeight: "500", fontSize: 15, color: colors.secondary },
  by: { fontSize: 15, fontWeight: "500", marginRight: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
  author: { flexDirection: "row" },
  pict: { width: "100%", height: 180, borderRadius: 20, resizeMode: "cover" },
  container: {
    width: "100%",
    height: 180,
    borderRadius: 20,
  },
});
