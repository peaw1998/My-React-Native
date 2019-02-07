import React from 'react';
import { View, StyleSheet } from 'react-native';
import Lesson from "../components/Lesson"


export default class ExerciseScreen extends React.Component {
  static navigationOptions = {
    title: 'EXERCISE',
  };

  render() {
    return (
      <View style={styles.container}>
        
        <Lesson />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
