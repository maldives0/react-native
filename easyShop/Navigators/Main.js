import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import UserNavigator from './UserNavigator';
import AdminNavigator from './AdminNavigator';

const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={30} />
          ),
        }}
      />
      {/* {isContext.stateUser.user.isAdmin == true ? (
     <Tab.Screen
     name="Admin"
     component={AdminNavigator}
     options={{
       tabBarIcon: ({color}) => <Icon name="cog" color={color} size={30} />,
     }}
   />
      ):null}
  */}
      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default Main;
