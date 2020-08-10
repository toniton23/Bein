import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../utils/color/colors";
import { Pone, Gw } from "../../utils";
import { Gap, NextButton, FrontCard } from "../../component";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const PageTwo = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#b2d8d8", "#66b2b2", "#008080", "#006666", "#004c4c"]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <FrontCard
            pict={Gw}
            animation="bounceIn"
            header="Introducing Motif"
            headerAnimate="fadeInLeft"
            descAnimate="fadeInRight"
            desc="
          A social network for fun self-improvement that will help you transform yourself"
          />

          <Gap height={53} />

          <NextButton
            text="Next"
            color={colors.secondary}
            nextAnimate="bounceIn"
            onPress={() => navigation.navigate("Page2")}
          />

          <Gap height={30} />
        </View>
      </ScrollView>
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
