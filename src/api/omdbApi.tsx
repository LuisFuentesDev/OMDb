import {Movie} from '../types/types';

const API_KEY = '293ef724';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (
  query: string,
  page: number = 1,
): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`,
    );
    const data = await response.json();
    if (data.Response === 'True') {
      return data.Search;
    }
    return [];
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
};

export const getMovieDetails = async (imdbID: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
