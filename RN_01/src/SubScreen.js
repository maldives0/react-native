import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SubScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text>sub stack area</Text>
      <Button title="go to main" onPress={() => navigation.navigate('Main')} />
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
export default SubScreen;
