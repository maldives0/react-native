/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from './src/header';
class App extends Component {
  state = {
    appName: 'my first app',
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.mainView}
        onPress={() => alert('hello ais')}>
        <View>
          <Header style={styles.mainText} name={this.state.appName} />
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  mainText: {
    fontSize: 20,
    padding: 50,
  },
});
export default App;
