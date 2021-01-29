/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const UserScreen = ({route, navigation}) => {
  const {name} = route.params;

  return (
    <View style={styles.main}>
      <Text>{JSON.stringify(name)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default UserScreen;
