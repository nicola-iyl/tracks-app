import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from "./src/screens/AccountScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

import {Provider as AuthProvider} from "./src/context/AuthContext";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Register: RegisterScreen,
    Login: LoginScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow : createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetails: TrackDetailsScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

const Context = () => {
  return (
      <AuthProvider>
        <App />
      </AuthProvider>
  );
}

export default Context;

/*export default ()=> {
  return (
      <AuthProvider>
        <App />
      </AuthProvider>
  );
}*/
