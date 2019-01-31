import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

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
      name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
    />
  ),
};

const ExerciseStack = createStackNavigator({
  Links: ExerciseScreen,
});

ExerciseStack.navigationOptions = {
  tabBarLabel: 'EXERCISE',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'}
    />
  ),
};

const MeStack = createStackNavigator({
  Settings: MeScreen,
});

MeStack.navigationOptions = {
  tabBarLabel: 'ME',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
    />
    
  ),
};




export default createBottomTabNavigator({
  HomeStack,
  ExerciseStack,
  MeStack,
  
});
