import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gap } from "../Gap";
import { colors } from "../../utils";

const Caption = ({ title, desc }) => {
  return (
    <View>
      <Text style={styles.about}>{title}</Text>
      <Gap height={5} />
      <Text>{desc}</Text>
    </View>
  );
};

export default Caption;

const styles = StyleSheet.create({
  about: { fontSize: 12, color: colors.grey },
});
