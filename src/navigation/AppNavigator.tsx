import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

export type RootStackParamList = {
  Tabs: undefined;
  Details: {imdbID: string};
};

export type TabParamList = {
  Search: undefined;
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{title: 'Buscar'}}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{title: 'Favoritos'}}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{headerShown: false}} // Oculta el header duplicado
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
