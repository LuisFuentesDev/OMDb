import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'favorites';

// Función para guardar una película en los favoritos
export const saveFavorite = async (movie: any) => {
  try {
    const favorites = await getFavorites();
    const exists = favorites.find((item: any) => item.imdbID === movie.imdbID);
    if (!exists) {
      const newFavorites = [...favorites, movie];
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    }
  } catch (error) {
    console.error('Error saving favorite:', error);
  }
};

// Función para eliminar una película los favoritos
export const removeFavorite = async (imdbID: string) => {
  try {
    const favorites = await getFavorites();
    const filtered = favorites.filter((item: any) => item.imdbID !== imdbID);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};

// Función para obtener los favoritos
export const getFavorites = async () => {
  try {
    const json = await AsyncStorage.getItem(FAVORITES_KEY);
    return json ? JSON.parse(json) : [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};

// Función para agregar una película a los favoritos
export const addToFavorites = async (movie: any) => {
  try {
    const favorites = await getFavorites();
    const updatedFavorites = [...favorites, movie];
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Error al agregar a favoritos:', error);
    throw new Error('Error al agregar la película a favoritos.');
  }
};
