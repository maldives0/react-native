/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const UselessTextInput = props => {
  return <TextInput editable {...props} />;
};
const textInput = () => {
  const [value, setValue] = useState('');
  return (
    <View>
      <UselessTextInput
        multiline={true}
        numberOfLines={4}
        onChangeText={value => setValue(value)}
        value={value}
        autoCapitalize={'words'}
      />
    </View>
  );
};

export default textInput;
