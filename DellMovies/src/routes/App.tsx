import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Dashboard from './Dashboard';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
