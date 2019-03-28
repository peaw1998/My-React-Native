import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title , Card , CardItem, Content  } from 'native-base';
import { View, Text ,  StyleSheet } from 'react-native';
import Profile from "../components/Profile"
import Analysis from "../components/Analysis"

export default class MeScreen extends React.Component {
  static navigationOptions = {
    title: 'ME',
  };

  render() {
    return (
      
      
      <View style={styles.container}>
      <Profile />
    <Analysis />
    </View> 
    );
  }
}
const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#fff',
  },
});