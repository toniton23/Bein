import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../button";
import { colors } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Gap } from "../Gap";

const TopMenu = ({
  text1,
  text2,
  width,
  height,
  color,
  title,
  size,
  radius,
}) => {
  return (
    <View style={styles.topMenu}>
      <Button
        width={width}
        height={height}
        color={color}
        title={title}
        size={size}
        radius={radius}
      />
      <Text style={styles.text}>{text1}</Text>
      <Gap width={20} />
      <Text style={styles.text}>{text2}</Text>
    </View>
  );
};

export default TopMenu;

const styles = StyleSheet.create({
  text: { color: colors.grey },
  menu: {
    flexDirection: "row",
    alignItems: "center",
  },
  topMenu: {
    width: "100%",
    height: 40,
    borderWidth: 0.2,
    borderRadius: 40,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 50,
  },
});
