import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from './components/DashboardScreen';
import SettingsScreen from './components/SettingsScreen';
import DevicesScreen from './components/DevicesScreen';

//const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerShadowVisible: true,
          headerTitleStyle: { fontWeight: '800', fontSize: 18, color: '#111111' },
          headerTintColor: '#111111',
        }}
      >
        <tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Smart Home' }}
        />
        <tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
        <tab.Screen
          name="Devices"
          component={DevicesScreen}
          options={{ title: 'Settings' }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
}