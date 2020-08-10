import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import {
  Gap,
  ListGroup,
  Plus,
  Home,
  Find,
  Message,
  ProfileMenu,
} from "../../component";
import { Drink, Pull, Start, colors, Back1 } from "../../utils";
import { ScrollView } from "react-native-gesture-handler";

const Template = (navigation) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Group</Text>
        <Gap height={20} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListGroup
            pict={Start}
            name="Run Marathon"
            text="9"
            color={colors.grey}
          />
          <Gap height={20} />
          <ListGroup
            pict={Drink}
            name="Drinking Lot of Water"
            text="7"
            color={colors.grey}
          />
          <Gap height={20} />
          <ListGroup
            pict={Pull}
            name="Push-up Daily"
            text="4"
            color={colors.grey}
          />
          <Gap height={20} />
        </ScrollView>
      </View>

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
            <Message onPress={() => navigation.navigate("MainGroup")} />
            <ProfileMenu />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Template;

const styles = StyleSheet.create({
  header: { fontSize: 32, fontWeight: "bold" },
  body: {
    width: "100%",
    height: "95%",
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
  container: { flex: 1 },
});
