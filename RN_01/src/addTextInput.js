/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Header from './src/header';

class App extends Component {
  state = {
    appName: 'my first app',
    value: '',
    alphabet: ['a', 'b', 'c', 'd'],
  };
  onChangeValue = e => {
    this.setState({
      value: e,
    });
  };
  onAddValue = () => {
    this.setState(prev => {
      return {
        value: '',
        alphabet: [...prev.alphabet, prev.value],
      };
    });
  };
  render() {
    return (
      <View>
        <Header style={styles.mainText} name={this.state.appName} />
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={this.onChangeValue}
          value={this.state.value}
          autoCapitalize={'words'}
          editable={true}
        />
        <Button title="add text input" onPress={this.onAddValue} />
        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((item, idx) => (
            <Text style={{padding: 5}} key={idx}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>
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
