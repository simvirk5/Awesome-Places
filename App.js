import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  state= {
    placeName:''
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={{width: 300}}
        placeholder="An awesome place" 
        value={this.state.placeName} 
        onChangeText={this.placeNameChangedHandler}
        />
      </View>
    );
  }
}

//stylesheet componenet is allowing to create objects that can assign to style property of the elements

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
