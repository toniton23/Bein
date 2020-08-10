import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gap, ListGroup, ListChat, Back } from "../../component";
import { Drink, Pull, Start, colors } from "../../utils";
import { ScrollView } from "react-native-gesture-handler";

const Template = (navigation) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Back onPress={() => navigation.goBack()} />
          <Gap width={150} />
          <Text style={styles.header}>Group</Text>
        </View>
        <Gap height={20} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListChat
            pict={Start}
            name="Run Marathon"
            text="925 pts"
            color={colors.secondary}
            number="1"
          />
          <Gap height={20} />
          <ListChat
            pict={Drink}
            name="Drinking Lot of Water"
            text="723 pts"
            color={colors.secondary}
            number="2"
          />
          <Gap height={20} />
          <ListChat
            pict={Pull}
            name="Push-up Daily"
            text="651 pts"
            color={colors.secondary}
            number="3"
          />
          <Gap height={20} />
          <ListChat
            pict={Start}
            name="Run Marathon"
            text="925 pts"
            color={colors.secondary}
            number="1"
          />
          <Gap height={20} />
          <ListChat
            pict={Drink}
            name="Drinking Lot of Water"
            text="723 pts"
            color={colors.secondary}
            number="2"
          />
          <Gap height={20} />
          <ListChat
            pict={Pull}
            name="Push-up Daily"
            text="651 pts"
            color={colors.secondary}
            number="3"
          />
          <Gap height={20} />
          <ListChat
            pict={Start}
            name="Run Marathon"
            text="925 pts"
            color={colors.secondary}
            number="1"
          />
          <Gap height={20} />
          <ListChat
            pict={Drink}
            name="Drinking Lot of Water"
            text="723 pts"
            color={colors.secondary}
            number="2"
          />
          <Gap height={20} />
          <ListChat
            pict={Pull}
            name="Push-up Daily"
            text="651 pts"
            color={colors.secondary}
            number="3"
          />
          <Gap height={20} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Template;

const styles = StyleSheet.create({
  header: { fontSize: 21, fontWeight: "bold" },
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  container: { flex: 1 },
});
