import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/homeScreen';
import UserScreen from './src/userScreen';
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('./assets/home_icon.png')}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
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
                onPress={() => {
                  navigation.navigate('User', {
                    name: 'go to home',
                  });
                }}
                title="Info"
                color="#00cc00"
              />
            ),
          })}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#00cc00"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
