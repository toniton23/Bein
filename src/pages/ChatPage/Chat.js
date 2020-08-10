import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { Gap, ListGroup } from "../../component";
import { colors, Start, Drink, Pull } from "../../utils";
import Bottom from "../../component/BottomMenu/Bottom";

const SearchPage = ({ navigation }) => {
  return (
    <View>
      <View style={styles.body}>
        <Text style={styles.header}>Group</Text>
        <Gap height={20} />
        <Animatable.View animation="fadeInUpBig" duration={2000}>
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
        </Animatable.View>
      </View>

      <View style={styles.bottom}>
        <Bottom />
      </View>
    </View>
  );
};

export default SearchPage;

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
