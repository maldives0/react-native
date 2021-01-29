import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <Text>home text area</Text>
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
export default HomeScreen;
