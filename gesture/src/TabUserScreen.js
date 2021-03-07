import React from 'react';
import Postcode from 'react-native-daum-postcode';

import {View, Text, Image, StyleSheet} from 'react-native';
const TabUserScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab user</Text>
      <Postcode
        style={{width: 400, height: 200}}
        jsOptions={{animated: true}}
        onSelected={(data) => alert(JSON.stringify(data.roadAddress))}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default TabUserScreen;
