import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Back, Gap, Header, TopMenu, Input, Button } from "../../component";
import { colors } from "../../utils";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Create = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back onPress={() => navigation.goBack()} />
        <Gap width={120} />
        <Header title="Chalenge" />
      </View>
      <Gap height={20} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopMenu
          text1="Weekly Chek-in"
          width={197}
          height={40}
          color={colors.default}
          title="Daily Chek-in"
          size={14}
          radius={40}
        />
        <Gap height={20} />
        <Input label="Name" title="Name Your Chalenge" />
        <Input label="Duration" title="Select duration" />
        <Input label="Start Date" title="dd/mm/yyyy" />
        <Input label="Buy-In Amount" title="$25" />
        <Input label="Reward Mechanism" title="Select reward mechanism" />
        <Gap height={20} />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ alignItems: "center" }}
        >
          <Text style={styles.add}>Additional Setting </Text>
        </TouchableOpacity>
        <Gap height={66} />
        <View style={styles.Button}>
          <Button
            width={167}
            height={60}
            color={colors.default}
            width={295}
            radius={40}
            size={15}
            title="Create one-time Chalenge"
          />
        </View>
        <Gap height={50} />
      </ScrollView>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  add: { color: colors.default, fontSize: 15 },
  Button: { alignItems: "center" },
  header: { flexDirection: "row", alignItems: "center" },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
