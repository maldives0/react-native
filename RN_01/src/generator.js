import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Generator = props => (
  <View style={styles.Generator}>
    <Button>{props.name}</Button>
  </View>
);
const styles = StyleSheet.create({
  Generator: {
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});
export default Generator;
