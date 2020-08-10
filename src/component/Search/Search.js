import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../utils/color/colors";
import { Ionicons } from "@expo/vector-icons";
import { Gap } from "../Gap";
import { TouchableOpacity } from "react-native-gesture-handler";

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  text,
  onPress,
}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.blue1);
  };
  const onBlurForm = () => {
    setBorder(colors.grey2);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ position: "absolute", left: 20 }}>
        <Ionicons
          name="md-search"
          size={24}
          color="black"
          position="ablsolute"
          left={20}
        />
      </View>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        placeholder="Search"
      ></TextInput>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <Gap height={10} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  text: {
    color: colors.default,
    fontSize: 18,
    fontWeight: "bold",
  },
  input: (border) => ({
    borderWidth: 0.5,
    borderColor: border,
    borderRadius: 10,
    paddingLeft: 40,
    height: 50,
    width: 260,
    marginRight: 50,
  }),
  label: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 6,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
