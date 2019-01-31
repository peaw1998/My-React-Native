import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import MeScreen from '../screens/MeScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'LEARN',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-link'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: ExerciseScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: MeScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};




export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  
});
