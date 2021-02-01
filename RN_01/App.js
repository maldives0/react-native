import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import DrawerHomeScreen from './src/drawerHomeScreen';
import SubScreen from './src/SubScreen';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TabHomeScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab home</Text>
    </View>
  );
};
const TabUserScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab User</Text>
    </View>
  );
};
const TabMessageScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab Message</Text>
    </View>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBarIcon = (focused, name) => {
  let iconName, iconSize;
  if (name === 'TabHome') {
    iconName = 'home-outline';
  } else if (name === 'User') {
    iconName = 'people-outline';
  } else if (name === 'Message') {
    iconName = 'mail-outline';
  }
  iconSize = focused ? 30 : 20;
  return <Ionicons size={iconSize} name={iconName} />;
};

const TabComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
      })}>
      <Tab.Screen name="TabHome" component={TabHomeScreen} />
      <Tab.Screen name="User" component={TabUserScreen} />
      <Tab.Screen name="Message" component={TabMessageScreen} />
    </Tab.Navigator>
  );
};

const DrawerComponent = () => {
  return (
    <Drawer.Navigator initialRouteName="DrawerHome" drawerType="front">
      <Drawer.Screen
        name="DrawerHome"
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
      <Drawer.Screen name="tab" component={TabComponent} />
    </Drawer.Navigator>
  );
};
const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}>
        <Text>open</Text>
      </TouchableOpacity>
    </View>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={DrawerComponent}
          options={{
            headerRight: ({}) => <HeaderRight />,
          }}
        />
        <Stack.Screen name="Sub" component={SubScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
