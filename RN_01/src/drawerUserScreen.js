/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {useLayoutEffect, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const DrawerUserScreen = ({route, navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      drawerIcon: () => (
        <Image
          style={{width: 30, height: 30}}
          source={require('../assets/home_icon.png')}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.main}>
      <Text>user text area</Text>
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
export default DrawerUserScreen;
