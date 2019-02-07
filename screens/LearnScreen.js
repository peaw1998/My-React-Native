import React, { Component } from 'react';
import { View, Body, StyleSheet, Header } from 'react-native';
import CardSubjectI from "../components/CardSubjectI"



export default class LearnScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <CardSubjectI />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});