import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../../utils/color/colors";
import { Ptwo, Cooking } from "../../utils";
import { Gap, Dot, BackButton, NextButton, FrontCard } from "../../component";
import { LinearGradient } from "expo-linear-gradient";

const PageTwo = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#daf8e3", "#97ebdb", "#00c2c7", "#0086ad", "#005582"]}
    >
      <View style={styles.container}>
        <FrontCard
          pict={Cooking}
          header="Influence with Actions"
          animation="fadeInDownBig"
          headerAnimate="fadeInLeft"
          descAnimate="fadeInRight"
          desc=" Follow challenges created by your favorite influencers, or create a challenge yourself and influence millions."
        />
        <Gap height={43} />

        <View style={styles.button}>
          <BackButton
            backAnimate="fadeInLeft"
            onPress={() => navigation.goBack()}
          />
          <NextButton
            text="Next"
            nextAnimate="fadeInRight"
            color={colors.secondary}
            onPress={() => navigation.navigate("Page3")}
          />
        </View>
        <Gap height={30} />
      </View>
    </LinearGradient>
  );
};

export default PageTwo;

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
