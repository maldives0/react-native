import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const DrawerHomeScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text>main stack area</Text>
      <Button title="go to sub" onPress={() => navigation.navigate('Sub')} />
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
export default DrawerHomeScreen;
