import React from 'react';
import {View, Text, Button, Image, Linking} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerHomeScreen from './src/drawerHomeScreen';
import DrawerUserScreen from './src/drawerUserScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function LogoTitle() {
  return (
    <Image
      style={{width: 30, height: 30}}
      source={require('./assets/home_icon.png')}
    />
  );
}
const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="hello"
        onPress={() => Linking.openURL('https://google.com')}
      />
      <DrawerItem
        label="info"
        icon={() => <LogoTitle />}
        onPress={() => Linking.openURL('https://google.com')}
      />
    </DrawerContentScrollView>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="front"
        drawerPosition="right"
        drawerStyle={{}}
        drawerContentOptions={
          {
            // activeTintColor: 'white',
            // activeBackgroundColor: 'green',
          }
        }
        drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="Home"
          component={DrawerHomeScreen}
          options={{
            drawerIcon: () => (
              <Image
                style={{width: 30, height: 30}}
                source={require('./assets/home_icon.png')}
              />
            ),
          }}
        />
        <Drawer.Screen name="User" component={DrawerUserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
