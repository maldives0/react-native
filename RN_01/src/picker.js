/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component {
  state = {
    value: 'korea',
  };

  render() {
    return (
      <View>
        <Text>hello</Text>
        <Picker
          style={{width: 250, height: 50}}
          selectedValue={this.state.value}
          onValueChange={(val, idx) => this.setState({value: val})}>
          <Picker.Item label="Korea" value="korea" />
          <Picker.Item label="India" value="india" />
        </Picker>
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
