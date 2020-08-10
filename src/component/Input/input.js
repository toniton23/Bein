import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../utils/color/colors";

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  text,
  title,
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
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        placeholder={title}
      ></TextInput>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  text: {
    color: colors.default,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 80,
  },
  input: (border) => ({
    borderWidth: 0.2,
    borderColor: border,
    borderRadius: 15,
    padding: 10,
    height: 50,
    width: "100%",
  }),
  label: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 6,
  },
  container: {},
});
