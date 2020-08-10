import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Gap } from "../Gap";
import * as Animatable from "react-native-animatable";

const FrontCard = ({
  pict,
  header,
  desc,
  animation,
  headerAnimate,
  descAnimate,
}) => {
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation={animation}
        duration={2000}
        source={pict}
        style={styles.pict}
      />
      <Gap height={35} />
      <Animatable.Text
        animation={headerAnimate}
        duration={2000}
        delay={500}
        style={styles.header}
      >
        {header}
      </Animatable.Text>
      <Gap height={5} />
      <Animatable.Text
        animation={descAnimate}
        duration={2000}
        delay={500}
        style={styles.desc}
      >
        {desc}
      </Animatable.Text>
    </View>
  );
};

export default FrontCard;

const styles = StyleSheet.create({
  desc: { fontSize: 16, color: "white", textAlign: "center" },
  header: { fontSize: 22, fontWeight: "bold", color: "white" },
  pict: { width: 350, height: 439, borderRadius: 20 },
  container: { flex: 1, alignItems: "center" },
});
