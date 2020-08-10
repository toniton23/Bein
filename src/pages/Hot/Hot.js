import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Bottom from "../../component/BottomMenu/Bottom";
import {
  Back,
  Header,
  Gap,
  Chalenge,
  Button,
  NextButton,
} from "../../component";
import { Game, colors, Run, Dancing, Gw } from "../../utils";
import { ScrollView } from "react-native-gesture-handler";

const Template = ({ navigation }) => {
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.header}>
          <Back onPress={() => navigation.goBack()} />
          <Gap width={130} />
          <Header title="🔥 Hot" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={20} />
          <View style={styles.Chalenge}>
            <Chalenge
              caption=" Get your Body become strong with our intensive exercises"
              title="Master In Game"
              author="Cucu Mulyani"
              pict={Run}
              day="21 days"
              user="19 K"
            />
            <Chalenge
              caption=" Dancing with your friends can make your life enjoy and healty"
              title="Dancing Joy"
              author="Julia Robbeck"
              pict={Dancing}
              day="21 days"
              user="19 K"
            />
          </View>
          <Gap height={20} />
          <View style={styles.Chalenge}>
            <Chalenge
              caption=" Get Your success with self confidence and high scill"
              title="Self Confidence"
              author="Maruto Azaki"
              pict={Gw}
              day="21 days"
              user="19 K"
            />
            <Chalenge
              caption=" Get your arms buffed and become strong with our intensive exercises"
              title="Master In Game"
              author="Desy Elisabeth"
              pict={Game}
              day="21 days"
              user="19 K"
            />
          </View>
          <Gap height={20} />
          <View style={styles.Chalenge}>
            <Chalenge
              caption=" Get your arms buffed and become strong with our intensive exercises"
              title="Master In Game"
              author="Desy Elisabeth"
              pict={Game}
              day="21 days"
              user="19 K"
            />
            <Chalenge
              caption=" Get your arms buffed and become strong with our intensive exercises"
              title="Master In Game"
              author="Desy Elisabeth"
              pict={Game}
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

export default Template;

const styles = StyleSheet.create({
  show: { alignItems: "center" },
  Chalenge: { flexDirection: "row" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  body: {
    width: "100%",
    height: "95%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  bottom: {
    width: "100%",
    height: "5%",
    flexDirection: "row",
  },
});
