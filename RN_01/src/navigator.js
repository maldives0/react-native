import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './src/homeScreen';
import UserScreen from './src/userScreen';

class App extends Component {
  state = {
    value: 'korea',
  };
  logoTitle = () => {
    return (
      <Image
        style={{width: 30, height: 30}}
        source={require('./assets/home_icon.png')}
      />
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="User" screenOptions={{...styles}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({route, navigation}) => ({
              title: route.params.name,
              headerTitle: <this.logoTitle />,
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
              userName: 'ais',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'pink',
  },
});
export default App;
