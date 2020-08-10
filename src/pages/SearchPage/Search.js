import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import {
  Gap,
  Search,
  Header,
  Chalenge,
  ChalengeCategory,
} from "../../component";
import {
  colors,
  Run,
  Cooking,
  Dancing,
  Game,
  Pone,
  Running,
} from "../../utils";
import Bottom from "../../component/BottomMenu/Bottom";

const SearchPage = ({ navigation }) => {
  return (
    <View>
      <View style={styles.body}>
        <Search text="Create" onPress={() => navigation.navigate("Create")} />
        <Gap height={20} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            title="⭐️ Featured Challenges"
            desc="View All"
            onPress={() => navigation.navigate("Feature")}
          />
          <Gap height={10} />
          <Animatable.View animation="fadeInDownBig" duration={2000}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Chalenge
                caption=" Get your arms buffed and become strong with our intensive exercises"
                title="Summer Shred"
                author="Ayu Wandira"
                pict={Running}
                day="21 days"
                user="19 K"
                onPress={() => navigation.navigate("ChalengePage")}
              />
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
                title="Cooking Fun"
                author="Robert McKenzie"
                pict={Cooking}
                day="21 days"
                user="19 K"
              />
              <Chalenge
                caption=" Get your arms buffed and become strong with our intensive exercises"
                title="Summer Shred"
                author="Ayu Wandira"
                pict={Run}
                day="21 days"
                user="19 K"
              />
              <Chalenge
                caption=" Get your arms buffed and become strong with our intensive exercises"
                title="Be a Dancer"
                author="Julia Anjani"
                pict={Dancing}
                day="21 days"
                user="19 K"
              />
            </ScrollView>
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" duration={2000}>
            <Gap height={30} />
            <Header
              title="🔥 Hot Challenges"
              desc="View All"
              onPress={() => navigation.navigate("Hot")}
            />
            <Gap height={10} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Chalenge
                caption=" Get your arms buffed and become strong with our intensive exercises"
                title="Dance Togther"
                author="Mia landswich"
                pict={Dancing}
                day="21 days"
                user="19 K"
              />
              <Chalenge
                caption=" Get your arms buffed and become strong with our intensive exercises"
                title="Cooking Fest"
                author="Alexander futirov"
                pict={Cooking}
                day="21 days"
                user="19 K"
              />
              <Chalenge
                caption=" Get your arms buffed and become strong with our intensive exercises"
                title="Sunday Run"
                author="Martin King"
                pict={Pone}
                day="21 days"
                user="19 K"
              />
              <Chalenge
                caption=" Get your arms buffed and become strong with our intensive exercises"
                title="Favorite Game"
                author="Nisa Hapsari"
                pict={Game}
                day="21 days"
                user="19 K"
              />
              <Chalenge
                caption=" Get your arms buffed and become strong with our intensive exercises"
                title="Summer Shred"
                author="Ayu Wandira"
                pict={Run}
                day="21 days"
                user="19 K"
              />
            </ScrollView>
          </Animatable.View>
          <Gap height={30} />
          <Header title="Challenges Category" />
          <Gap height={10} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ChalengeCategory title="Jogging" pict={Run} color={colors.blue1} />
            <ChalengeCategory
              title="Cooking"
              pict={Cooking}
              color={colors.purple}
            />
            <ChalengeCategory
              title="Dacing"
              pict={Dancing}
              color={colors.tomato}
            />
            <ChalengeCategory title="Game" pict={Game} color={colors.bluish} />
          </ScrollView>
          <Gap height={100} />
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <Bottom />
      </View>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  View: { fontSize: 15, color: colors.grey },
  text: { fontSize: 20, fontWeight: "bold" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
