import React from 'react';
import {View, Text, Button, Image} from 'react-native';

import {NavigationContainer, CommonActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>home</Text>
      <Button
        title="navigate to profile"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Profile',
              params: {
                user: 'momo',
              },
            }),
          )
        }
      />
      <Button
        title="go back"
        onPress={() =>
          navigation.dispatch({
            ...CommonActions.goBack(),
            source: route.key,
            target: route?.params?.key,
          })
        }
      />
    </View>
  );
};
const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{route.params.user}'s profile</Text>
      <Button
        title="navigate to home"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Home',
            }),
          )
        }
      />
      <Button
        title="reset"
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Profile',
                  params: {user: 'momo', key: route.params.key},
                },
                {name: 'Home'},
              ],
            }),
          )
        }
      />
      <Button
        title="change user param"
        onPress={() =>
          navigation.dispatch({
            ...CommonActions.setParams({
              user: 'whoo',
            }),
            source: route.key,
          })
        }
      />
      <Button
        title="go back"
        onPress={() =>
          navigation.dispatch({
            ...CommonActions.goBack(),
            source: route.key,
            target: route?.params?.key,
          })
        }
      />
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
