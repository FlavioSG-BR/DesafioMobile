import React from 'react';
import  Icon  from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import { Text, View } from 'react-native';


import Movies from '../pages/Movies';
import Settings from '../pages/Settings';

const BottomTab = createBottomTabNavigator();

const Routes: React.FC = () => {
  const {colors} = useTheme();

  return (
    <BottomTab.Navigator 
     screenOptions={{
        tabBarInactiveTintColor: colors.primary,
    }} >
      <BottomTab.Screen
        name="Movies"
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="arrow-down" size={size} color={color} />
          ),
          title: 'Filmes',
        }}
        component={Movies}
      />
      {/* <BottomTab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="settings" size={size} color={color} />
          ),
          title: 'Cofigurações',
        }}
        component={Settings}
      /> */}
    </BottomTab.Navigator>
  );
};

export default Routes;
