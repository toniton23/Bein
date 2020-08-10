import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Alert,
} from "react-native";
import { Back1 } from "../../utils/img/dumy";
import { colors } from "../../utils/color/colors";
import { Home, Find, Message, ProfileMenu } from "../Menu";
import { useNavigation } from "@react-navigation/native";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { color } from "react-native-reanimated";

const Bottom = ({ Press }) => {
  const [active, setActive] = useState(false);
  const color = () => {
    setActive(!active);
  };
  const navigation = useNavigation();
  const buttonSize = new Animated.Value(0);
  const mode = new Animated.Value(0);
  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
    } else {
      Alert.alert("you need to give permission to work");
    }
  };

  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      console.log(data);
    } else {
      Alert.alert("you need to give permission to work");
    }
  };

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 200,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
      }),
    ]).start();
  };

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const cameraX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [220, 130],
  });
  const cameraY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 40],
  });

  const imageX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [215, 215],
  });
  const imageY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [70, -30],
  });

  const createX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [220, 300],
  });
  const createY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 40],
  });
  return (
    <View style={styles.bottom}>
      <ImageBackground source={Back1} style={styles.bg}>
        <Animated.View
          style={{
            position: "absolute",
            left: createX,
            top: createY,
          }}
        >
          <View style={styles.secondaryButton}>
            <TouchableHighlight
              onPress={() => navigation.navigate("Create")}
              underlayColor="purple"
            >
              <MaterialIcons name="create" size={24} color="white" />
            </TouchableHighlight>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            left: imageX,
            top: imageY,
          }}
        >
          <View style={styles.secondaryButton}>
            <TouchableHighlight
              onPress={() => pickFromGallery()}
              underlayColor="purple"
            >
              <Feather
                name="image"
                size={24}
                color="white"
                onPress={() => navigate.navigate("Create")}
              />
            </TouchableHighlight>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            left: cameraX,
            top: cameraY,
          }}
        >
          <View style={styles.secondaryButton}>
            <TouchableHighlight
              onPress={() => pickFromCamera()}
              underlayColor="purple"
            >
              <Feather
                name="camera"
                size={24}
                color="white"
                onPress={() => navigate.navigate("Create")}
              />
            </TouchableHighlight>
          </View>
        </Animated.View>

        <Animated.View style={[styles.mainButton, sizeStyle]}>
          <TouchableHighlight
            onPress={handlePress}
            underlayColor={colors.secondary}
          >
            <Animated.View style={{ transform: [{ rotate: rotation }] }}>
              <FontAwesome name="plus" size={44} color="white" />
            </Animated.View>
          </TouchableHighlight>
        </Animated.View>

        <View style={styles.menu}>
          {/* <Icon /> */}
          <Home
            onPress={(Press) => navigation.navigate("Home")}
            color={color}
          />
          <Find
            onPress={(Press) => navigation.navigate("Search")}
            color={color}
          />
          <Message
            onPress={() => navigation.navigate("Chat")}
            // color={color ? colors.default : colors.purple1}
          />
          <ProfileMenu
            onPress={() => navigation.navigate("Profile")}
            // color={color ? colors.default : colors.purple1}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  secondaryButton: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "purple",
    width: 50,
    height: 50,
    borderRadius: 25,
    bottom: 25,
    zIndex: 10,
    bottom: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  mainButton: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: colors.secondary,
    width: 70,
    height: 70,
    borderRadius: 35,
    bottom: 25,
    zIndex: 10,
    bottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  bg: {
    width: "100%",
    height: 70,
  },

  bottom: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    marginTop: -34,
  },
});
