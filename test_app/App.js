/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const App = () => {
  const [value, setValue] = useState('this it text place');
  return (
    <View>
      <Text> Hello World </Text>
      <TextInput onChangeText={value => setValue(value)} value={value} />
    </View>
  );
};

export default App;
