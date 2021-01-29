import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => (
  <View style={styles.header}>
    <Text>{props.name}</Text>
  </View>
);
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});
export default Header;
