import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {getMovieDetails} from '../api/omdbApi';
import {addToFavorites, getFavorites} from '../utils/storage';
import detailsStyles from '../styles/detailsStyles';
import {DetailsScreenRouteProp} from '../types/types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {removeFavorite} from '../utils/storage';

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const {imdbID} = route.params;

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(imdbID);
      setMovie(data);
      setLoading(false);

      const favorites = await getFavorites();
      const exists = favorites.some((fav: any) => fav.imdbID === data.imdbID);
      setIsFavorite(exists);
    };

    fetchDetails();
  }, [imdbID]);

  const handleAddToFavorites = async () => {
    try {
      const favorites = await getFavorites();
      const isAlreadyFavorite = favorites.some(
        (fav: any) => fav.imdbID === movie.imdbID,
      );

      if (isAlreadyFavorite) {
        Alert.alert(
          'Ya en favoritos',
          'Esta película ya está en tu lista de favoritos.',
        );
        return;
      }

      await addToFavorites(movie);
      setIsFavorite(true);
      Alert.alert('Éxito', 'Película añadida a favoritos.');
    } catch (error) {
      Alert.alert(
        'Error',
        'Hubo un problema al agregar la película a favoritos.',
      );
    }
  };

  if (loading) {
    return (
      <View style={detailsStyles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!movie) {
    return (
      <View style={detailsStyles.centered}>
        <Text>No se pudo cargar la información de la película.</Text>
      </View>
    );
  }
  const handleToggleFavorite = async () => {
    try {
      if (isFavorite) {
        await removeFavorite(movie.imdbID);
        setIsFavorite(false);
        Alert.alert('Eliminado', 'Película eliminada de favoritos.');
      } else {
        const favorites = await getFavorites();
        const isAlreadyFavorite = favorites.some(
          (fav: any) => fav.imdbID === movie.imdbID,
        );

        if (isAlreadyFavorite) {
          Alert.alert(
            'Ya en favoritos',
            'Esta película ya está en tu lista de favoritos.',
          );
          return;
        }

        await addToFavorites(movie);
        setIsFavorite(true);
        Alert.alert('Éxito', 'Película añadida a favoritos.');
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Hubo un problema al actualizar la lista de favoritos.',
      );
    }
  };

  return (
    <View style={detailsStyles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        {movie.Poster !== 'N/A' && (
          <Image source={{uri: movie.Poster}} style={detailsStyles.poster} />
        )}
        <Text style={detailsStyles.title}>{movie.Title}</Text>
        <View style={{marginTop: 10}}>
          <Text style={detailsStyles.info}>Año: {movie.Year}</Text>
          <Text style={detailsStyles.info}>Director: {movie.Director}</Text>
        </View>
        <Text style={detailsStyles.info}>Actores: {movie.Actors}</Text>
        <Text style={detailsStyles.plot}>{movie.Plot}</Text>

        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 200,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            flexDirection: 'row',
          }}
          onPress={handleToggleFavorite}>
          <FontAwesomeIcon
            icon={faStar}
            size={20}
            color={isFavorite ? 'yellow' : 'white'}
          />

          <Text
            style={{color: '#fff', marginLeft: 10, fontFamily: 'Avenir-Heavy'}}>
            {isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
