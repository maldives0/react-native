/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  View,
  Text,
  Animated,
} from 'react-native';
import AnimOne from './src/AnimOne';
import SuperText from './src/SuperText';
import DeviceInfo from 'react-native-device-info';
const App = () => {
  const fontScaleCheck = () => {
    if (Dimensions.get('window').fontScale === 1) {
      console.warn('good');
    } else {
      console.warn('error!!');
    }
  };
  const checkSupport = () => {
    if (Platform.OS === 'ios') {
      if (Platform.Version < 13.4) {
        return false;
      }
    } else {
      if (Platform.Version < 27) {
        return false;
      }
    }
    return true;
  };

  return (
    <View>
      {fontScaleCheck()}

      <Text>{checkSupport() ? 'support' : 'no support'}</Text>
      <SuperText style={{backgroundColor: 'orange'}}> super text </SuperText>
      <SuperText style={{backgroundColor: 'yellow'}}> 123 </SuperText>
      <SuperText style={styles.container}> {DeviceInfo.getBrand()} </SuperText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 15,
  },
});

export default App;
