import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Button,
  Alert,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {getMovieDetails} from '../api/omdbApi';
import {addToFavorites, getFavorites} from '../utils/storage';
import type {RootStackParamList} from '../navigation/AppNavigator';
import detailsStyles from '../styles/detailsStyle';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const {imdbID} = route.params;

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(imdbID);
      setMovie(data);
      setLoading(false);
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

  return (
    <ScrollView contentContainerStyle={detailsStyles.container}>
      {movie.Poster !== 'N/A' && (
        <Image source={{uri: movie.Poster}} style={detailsStyles.poster} />
      )}
      <Text style={detailsStyles.title}>{movie.Title}</Text>
      <Text style={detailsStyles.info}>Año: {movie.Year}</Text>
      <Text style={detailsStyles.info}>Director: {movie.Director}</Text>
      <Text style={detailsStyles.info}>Actores: {movie.Actors}</Text>
      <Text style={detailsStyles.plot}>{movie.Plot}</Text>

      <Button title="Agregar a favoritos" onPress={handleAddToFavorites} />
    </ScrollView>
  );
};

export default DetailsScreen;
