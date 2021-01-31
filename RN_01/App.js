import React from 'react';
import {View, Text, Button, Image} from 'react-native';

import {NavigationContainer, CommonActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const HomeScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>home</Text>
    </View>
  );
};
const UserScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User</Text>
    </View>
  );
};
const MessageScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Message</Text>
    </View>
  );
};

const Tap = createBottomTabNavigator();
const TabBarIcon = (focused, name) => {
  let iconName, iconSize;
  if (name === 'Home') {
    iconName = 'home-outline';
  } else if (name === 'User') {
    iconName = 'people-outline';
  } else if (name === 'Message') {
    iconName = 'mail-outline';
  }
  iconSize = focused ? 30 : 20;
  return <Ionicons size={iconSize} name={iconName} />;
};
function App() {
  return (
    <NavigationContainer>
      <Tap.Navigator
        screenOptions={({route}) => ({
          tabBarLabel: route.name,
          tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
        })}>
        <Tap.Screen name="Home" component={HomeScreen} />
        <Tap.Screen name="User" component={UserScreen} />
        <Tap.Screen name="Message" component={MessageScreen} />
      </Tap.Navigator>
    </NavigationContainer>
  );
}

export default App;
