import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {getFavorites} from '../utils/storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/types';
import favoriteStyles from '../styles/favoriteStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBed} from '@fortawesome/free-solid-svg-icons';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const data = await getFavorites();
        setFavorites(data);
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };
    const unsubscribe = navigation.addListener('focus', loadFavorites);
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={favoriteStyles.item}
      onPress={() => navigation.navigate('Details', {imdbID: item.imdbID})}>
      <Text style={favoriteStyles.title}>{item.Title}</Text>
      <FontAwesomeIcon icon={faBed} size={25} color="#63bf04" />
      <Text>{item.Year}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={favoriteStyles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : favorites.length === 0 ? (
        <Text>No tienes películas favoritas aún.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.imdbID}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default FavoritesScreen;
