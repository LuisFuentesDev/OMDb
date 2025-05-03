import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Text, TouchableOpacity} from 'react-native';

export type RootStackParamList = {
  Search: undefined;
  Details: {imdbID: string};
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={({navigation}) => ({
            title: 'Buscar',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Favorites')}>
                <Text style={{marginRight: 10, color: 'blue'}}>Favoritos</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{title: 'Favoritos'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
