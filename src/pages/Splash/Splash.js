import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ikon } from "../../utils";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Page1");
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={Ikon} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 15, marginTop: 20 }}>Make Your Challenges</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
