import React from "react";
import { StyleSheet, View } from "react-native";
import { Gap, Info, TopMenu, HomeCard } from "../../component";
import * as Animatable from "react-native-animatable";
import { colors, Pone, Pthree, Gw, Run } from "../../utils";
import { Text } from "native-base";
import { Avatar } from "../../component/Avatar";
import { Button } from "../../component";
import { ScrollView } from "react-native-gesture-handler";
import Bottom from "../../component/BottomMenu/Bottom";

const Feature = ({ navigation }) => {
  return (
    <View>
      <View style={styles.body}>
        <Animatable.View animation="lightSpeedIn" duration={2000}>
          <Text style={styles.header}>Profile</Text>
          <Gap height={17} />
        </Animatable.View>

        <Animatable.View animation="lightSpeedIn" duration={2000} delay={1000}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.Profile}>
              <Gap
                height={86}
                width={86}
                radius={86 / 2}
                color={colors.secondary}
              />
              <View style={styles.avatar}>
                <Avatar height={80} width={80} radius={80 / 2} pict={Gw} />
              </View>
              <Gap width={30} />
              <View>
                <View style={styles.info}>
                  <Info
                    title="896"
                    size={16}
                    weight="bold"
                    desc="Check-Ins"
                    color={colors.grey}
                  />
                  <Info
                    title="650"
                    size={16}
                    weight="bold"
                    desc="Followes"
                    color={colors.grey}
                  />
                  <Info
                    title="20"
                    size={16}
                    weight="bold"
                    desc="Following"
                    color={colors.grey}
                  />
                </View>
                <Gap height={10} />
                <View style={{ flexDirection: "row" }}>
                  <Button
                    height={32}
                    width={134}
                    radius={40}
                    title="Message"
                    color={colors.default}
                  />
                  <Gap width={15} />
                  <Button
                    height={32}
                    width={90}
                    radius={40}
                    title="User"
                    color={colors.grey}
                  />
                </View>
                <Gap height={20} />
                <View
                  style={{
                    marginLeft: -110,
                    width: 350,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>Alvaro Gomez</Text>
                  <Text style={{ fontSize: 14, color: colors.grey }}>
                    Chicago, California
                  </Text>
                  <Gap height={5} />
                  <Text>
                    Just a girl dancing through life💃 Love playing video games
                    and running! #FoodAddict
                  </Text>
                </View>
                <Gap height={40} />
              </View>
            </View>

            <View
              style={{
                width: "100%",

                marginTop: -20,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                paddingTop: 15,
                paddingHorizontal: 20,
              }}
            >
              <TopMenu
                width={111}
                height={40}
                radius={40}
                color={colors.secondary}
                title="Feeds"
                text1="Chalenges"
                text2="Stats"
              />
              <Gap height={20} />
              <HomeCard
                width={40}
                height={40}
                radius={40 / 2}
                pict={Pone}
                name="Jenny woo"
                desc="Los Angeles, California"
                image={Run}
                title="Summer Shred Challenge"
                author=" Chloe Ting"
                caption="I keep getting stronger everyday. Grind only
            begins right now⚡️"
                number={124}
                numb={9}
                nom="2.7k"
              />
              <Gap height={20} />

              <HomeCard
                width={40}
                height={40}
                radius={40 / 2}
                pict={Pthree}
                name="Jenny woo"
                desc="Los Angeles, California"
                image={Pthree}
                title="Summer Shred Challenge"
                author=" Chloe Ting"
                caption="I keep getting stronger everyday. Grind only
            begins right now⚡️"
                number={124}
                numb={9}
                nom="2.7k"
              />
            </View>
            <Gap height={100} />
          </ScrollView>
        </Animatable.View>
      </View>

      <View style={styles.bottom}>
        <Bottom />
      </View>
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({
  info: {
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: { position: "absolute", left: 23, top: 13 },
  Profile: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  header: { fontSize: 32, fontWeight: "bold", marginLeft: 20 },
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
