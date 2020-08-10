import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../../utils/color/colors";
import { Pthree, Game } from "../../utils";
import { Gap, Dot, BackButton, NextButton, FrontCard } from "../../component";
import { LinearGradient } from "expo-linear-gradient";

const PageThree = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#ffc100", "#ff9a00", "#ff7400", "#ff4d00", "#ff0000"]}
    >
      <View style={styles.container}>
        <FrontCard
          pict={Game}
          animation="bounceIn"
          headerAnimate="fadeInLeft"
          descAnimate="fadeInRight"
          header="Become a Better You"
          desc=" Become the best version of yourself here on Motif, starting today!"
        />
        <Gap height={53} />
        <View style={styles.button}>
          <BackButton
            backAnimate="bounceIn"
            onPress={() => navigation.goBack()}
          />
          <NextButton
            nextAnimate="bounceIn"
            text="Done"
            color={colors.secondary}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <Gap height={30} />
      </View>
    </LinearGradient>
  );
};

export default PageThree;

const styles = StyleSheet.create({
  button: { flexDirection: "row" },
  dot: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 59,
    height: 9,
  },

  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
