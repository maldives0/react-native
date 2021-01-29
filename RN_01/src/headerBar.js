import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/homeScreen';
import UserScreen from './src/userScreen';

const Stack = createStackNavigator();

function App() {
  function LogoTitle() {
    return (
      <Image
        style={{width: 20, height: 20}}
        source={require('./assets/home_icon.png')}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            backgroundColor: '#f4511e',
            fontWeight: '200',
            color: '#fff',
            textAlign: 'center',
            flex: 1,
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({route, navigation}) => ({
            headerTitle: <LogoTitle />,

            headerRight: () => (
              <Button
                title="back"
                color="#000"
                onPress={() => navigation.navigate('User')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          initialParams={{
            name: 'user',
          }}
          options={({route, navigation}) => ({
            title: route.params.name,
            headerRight: () => (
              <Button
                title="back"
                color="#000"
                onPress={() => navigation.navigate('Home')}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
