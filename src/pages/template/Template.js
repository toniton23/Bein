import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { Home, Find, Message, ProfileMenu, Plus } from "../../component";
import { colors, Back1 } from "../../utils";

const Feature = ({ navigation }) => {
  return (
    <View>
      <View style={styles.body}></View>

      <View style={styles.bottom}>
        <ImageBackground source={Back1} style={styles.bg}>
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              backgroundColor: colors.secondary,
              width: 70,
              height: 70,
              borderRadius: 35,
              bottom: 25,
              zIndex: 10,
              bottom: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Plus />
          </View>
          <View style={styles.menu}>
            <Home onPress={() => navigation.navigate("Home")} />
            <Find onPress={() => navigation.navigate("Search")} />
            <Message onPress={() => navigation.navigate("Chat")} />
            <ProfileMenu onPress={() => navigation.navigate("ChatGroup")} />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "99%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  bg: {
    width: "100%",
    height: 70,
  },
  bottom: {
    width: "100%",
    height: "1%",
    flexDirection: "row",
    marginTop: -35,
  },
});
