import React from 'react';
import {HomeScreen} from './index';
import {printLogs} from '../Config/ReactotronConfig';
import {navigationRef} from '../Services/NavigatorServices';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => {
        const {index, routes = []} = state || {};
        printLogs(routes[index]);
      }}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
