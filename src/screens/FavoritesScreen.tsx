import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {getFavorites, removeFavorite} from '../utils/storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/types';
import favoriteStyles from '../styles/favoriteStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import FavoriteItem from '../components/FavoriteItem';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Cargar los favoritos
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

  // Cargar favoritos al navegar a esta pantalla
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadFavorites);
    return unsubscribe;
  }, [navigation]);

  // Eliminar favorito
  const handleRemove = async (imdbID: string) => {
    await removeFavorite(imdbID);
    loadFavorites();
  };

  const renderItem = ({item}: any) => {
    return <FavoriteItem item={item} onRemove={handleRemove} />;
  };

  return (
    <SafeAreaView style={[favoriteStyles.container, {flex: 1}]}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : favorites.length === 0 ? (
        <View
          style={{
            height: 50,
            borderBottomLeftRadius: 25,
            borderTopLeftRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 20, fontFamily: 'Avenir-Heavy'}}>
            Aún no tienes películas favoritas.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.imdbID}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 20}}
        />
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;
