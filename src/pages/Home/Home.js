import React from "react";
import { StyleSheet, View } from "react-native";
import { Gap, HomeCard, TopMenu } from "../../component";
import { colors, Pone, Cooking, Game, Dancing, Gw, Oo } from "../../utils";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import Bottom from "../../component/BottomMenu/Bottom";

const HomePage = ({ navigation, onPress }) => {
  const navigate = useNavigation();
  // const isFocused = state.index === index;

  return (
    <View>
      <View style={styles.body}>
        <Animatable.Text
          animation="fadeInRightBig"
          duration={1500}
          style={styles.header}
        >
          Home
        </Animatable.Text>
        <Gap height={20} />
        <Animatable.View animation="fadeInLeftBig" duration={3000}>
          <TopMenu
            text1="Following"
            width={200}
            height={40}
            color={colors.default}
            title="🔥 Hot"
            size={14}
            radius={40}
          />
        </Animatable.View>
        <Gap height={20} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animatable.View animation="fadeInUpBig" duration={2000} delay={1000}>
            <HomeCard
              width={40}
              height={40}
              radius={40 / 2}
              pict={Oo}
              name="Angel Caramaoy"
              desc="Los Angeles, California"
              image={Game}
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
              pict={Gw}
              name="Adrian Yos"
              desc="Los Angeles, California"
              image={Dancing}
              title="Summer Shred Challenge"
              author=" Chloe Ting"
              caption="I keep getting stronger everyday. Grind only
            begins right now⚡️"
              number={124}
              numb={9}
              nom="2.7k"
            />
          </Animatable.View>
          <Gap height={20} />
          <HomeCard
            width={40}
            height={40}
            radius={40 / 2}
            pict={Pone}
            name="Jessica aBachir"
            desc="Los Angeles, California"
            image={Cooking}
            title="Summer Shred Challenge"
            author=" Chloe Ting"
            caption="I keep getting stronger everyday. Grind only
            begins right now⚡️"
            number={124}
            numb={9}
            nom="2.7k"
          />

          <Gap height={100} />
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <Bottom //title={name} active={isFocused}//
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  header: { fontSize: 32, fontWeight: "bold" },
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
