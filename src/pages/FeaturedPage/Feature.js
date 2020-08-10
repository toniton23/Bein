import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Back, Header, Gap, Chalenge, NextButton } from "../../component";
import {
  Game,
  colors,
  Running,
  Cooking,
  Dancing,
  Ptwo,
  Run,
} from "../../utils";
import { ScrollView } from "react-native-gesture-handler";
import Bottom from "../../component/BottomMenu/Bottom";

const Feature = ({ navigation }) => {
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.header}>
          <Back onPress={() => navigation.goBack()} />
          <Gap width={100} />
          <Header title="⭐️ Featured" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={20} />
          <View style={styles.Chalenge}>
            <Animatable.View
              style={styles.Chalenge}
              animation="fadeInLeftBig"
              duration={2000}
            >
              <Chalenge
                caption=" How to an expert gamer and make monet with it"
                title="Master In Game"
                author="Desy Elisabeth"
                pict={Game}
                day="21 days"
                user="19 K"
              />
            </Animatable.View>
            <Animatable.View
              style={styles.Chalenge}
              animation="fadeInRightBig"
              duration={2000}
            >
              <Chalenge
                caption="Challenge your friend to sunday morning jogging"
                title="Jogging Fun"
                author="Elisabeth Noah"
                pict={Running}
                day="21 days"
                user="19 K"
              />
            </Animatable.View>
          </View>
          <Gap height={20} />
          <View style={styles.Chalenge}>
            <Animatable.View
              style={styles.Chalenge}
              animation="fadeInLeftBig"
              duration={2000}
            >
              <Chalenge
                caption=" How to make delicious food in 1 hour"
                title="Cooking Master"
                author="Alexander Grigs"
                pict={Cooking}
                day="21 days"
                user="19 K"
              />
            </Animatable.View>
            <Animatable.View
              style={styles.Chalenge}
              animation="fadeInRightBig"
              duration={2000}
            >
              <Chalenge
                caption=" Make dancing club with your friends and get famous"
                title="Dancing Club"
                author="Mark Andrew"
                pict={Dancing}
                day="21 days"
                user="19 K"
              />
            </Animatable.View>
          </View>
          <Gap height={20} />
          <View style={styles.Chalenge}>
            <Chalenge
              caption=" Get your arms buffed and become strong with our intensive exercises"
              title="Push-up Time"
              author="Martin Kues"
              pict={Ptwo}
              day="21 days"
              user="19 K"
            />
            <Chalenge
              caption=" Get your arms buffed and become strong with our intensive exercises"
              title="Running Fest"
              author="Desy Elisabeth"
              pict={Run}
              day="21 days"
              user="19 K"
            />
          </View>
          <Gap height={50} />
          <View style={styles.show}>
            <NextButton text="Show More" color={colors.default} />
          </View>
          <Gap height={100} />
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <Bottom />
      </View>
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({
  show: { alignItems: "center" },
  Chalenge: { flexDirection: "row" },
  header: { flexDirection: "row" },
  body: {
    width: "100%",
    height: "96%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  bottom: {
    width: "100%",
    height: "4%",
    backgroundColor: "blue",
  },
});
