import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {RootStackParamList, TabParamList} from '../types/types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass, faStar} from '@fortawesome/free-solid-svg-icons';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        title: 'Buscar',
        tabBarIcon: ({color, size}) => (
          <FontAwesomeIcon icon={faMagnifyingGlass} size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        title: 'Favoritos',
        tabBarIcon: ({color, size}) => (
          <FontAwesomeIcon icon={faStar} size={size} color={color} />
        ),
      }}
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
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
