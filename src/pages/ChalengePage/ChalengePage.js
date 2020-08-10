import React from "react";
import { StyleSheet, View } from "react-native";
import { Back, Header, Gap, VideoCard, Caption, Button } from "../../component";
import { colors, Running } from "../../utils";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const ChalengePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back onPress={() => navigation.goBack()} />
        <Gap width={120} />
        <Header title="Chalenge" />
      </View>
      <Gap height={20} />
      <Animatable.View animation="fadeInUpBig" duration={2000}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VideoCard pict={Running} />
          <Gap height={20} />
          <Caption
            desc="This challenge will transform your body into a a real steel & prepare it
        for summer season just in time🌴️"
            title="About"
          />
          <Gap height={20} />
          <View style={styles.caption}>
            <Caption title="Frequncy" desc="Daily" />
            <Caption title="Duration" desc="21 Days" />
            <Caption title="Daily Time" desc="10-15 min" />
            <Caption title="Chek-in Cutoff" desc="3 AM" />
          </View>
          <Gap height={20} />
          <Caption
            title="Rules"
            desc="Follow the day-by-day instruction in this link: https:// www.chloeting.com/program/2020/ hourglass-program.html and post your workout
time-lapse video daily to check in"
          />
          <Gap height={92} />
          <View style={{ alignItems: "center" }}>
            <Button
              height={60}
              width={300}
              color={colors.default}
              title="Join Chalenge"
              size={20}
              radius={40}
            />
          </View>
          <Gap height={90} />
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default ChalengePage;

const styles = StyleSheet.create({
  caption: { flexDirection: "row", justifyContent: "space-between" },
  header: { flexDirection: "row", alignItems: "center" },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
