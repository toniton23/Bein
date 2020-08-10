// In App.js in a new project

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PageOne,
  PageTwo,
  PageThree,
  Home,
  SearchPage,
  Feature,
  Hot,
  ChalengePage,
  CreateChalenge,
  Create2,
  Chat,
  ChatGroup,
  ChalengeGroup,
  MainGroup,
  ProfilePage,
  Splash,
} from "../pages";
import { Animation, StarAnimation, Anim1 } from "../pages/Animation";
import { ListGroup } from "../component";
import { colors } from "../utils";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page1"
        component={PageOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page2"
        component={PageTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page3"
        component={PageThree}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Feature"
        component={Feature}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Hot"
        component={Hot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChalengePage"
        component={ChalengePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Create"
        component={CreateChalenge}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Create2"
        component={Create2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainGroup"
        component={MainGroup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatGroup"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListGroup"
        component={ListGroup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChalengeGroup"
        component={ChalengeGroup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Animation"
        component={Animation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Star"
        component={StarAnimation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Anim1"
        component={Anim1}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default App;
