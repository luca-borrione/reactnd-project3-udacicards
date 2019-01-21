// @flow
import React from 'react';
import { Platform } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons, MaterialCommunityIcons, type Icon } from '@expo/vector-icons';
import { purple, white, palePurple } from '../utils/colors';
import DecksList from './DecksList';
import AddDeck from '../containers/AddDeck';

type iconProps = {
  tintColor: string
};

const decksIcon = ({ tintColor }: iconProps): Icon => (
  Platform.OS === 'ios'
    ? <Ionicons name="ios-albums" size={30} color={tintColor} />
    : <MaterialCommunityIcons name="cards-outline" size={26} color={tintColor} />
);

const addDeckIcon = ({ tintColor }: iconProps): Icon => (
  Platform.OS === 'ios'
    ? <Ionicons name="ios-add-circle-outline" size={30} color={tintColor} />
    : <MaterialCommunityIcons name="plus-box-outline" size={26} color={tintColor} />
);

const RouteConfigs = {
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: decksIcon,
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: addDeckIcon,
    },
  },
};

const HomeScreen = Platform.OS === 'ios'
  ? createBottomTabNavigator(RouteConfigs, {
    initialRouteName: 'DecksList',
    tabBarOptions: {
      activeTintColor: purple,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: palePurple,
      },
    },
  })

  : createMaterialBottomTabNavigator(RouteConfigs, {
    initialRouteName: 'DecksList',
    shifting: true,
    activeColor: white,
    barStyle: {
      backgroundColor: purple,
    },
  });

export default createAppContainer(HomeScreen);
