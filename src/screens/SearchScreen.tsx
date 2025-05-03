import React, {useState, useCallback} from 'react';
import {View, ActivityIndicator, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {searchMovies} from '../api/omdbApi';
import {Movie, RootStackParamList} from '../types/types';
import {SafeAreaView} from 'react-native-safe-area-context';

import searchStyles from '../styles/searchStyles';
import Pagination from '../components/Pagination';
import SearchResults from '../components/SearchResults';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Función para manejar la búsqueda
  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setPage(1);
    const movies = await searchMovies(query.trim(), 1);
    setResults(movies);
    setHasMore(movies.length === 10);
    setLoading(false);
  };

  // Función para cargar más resultados
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    const nextPage = page + 1;
    setLoading(true);
    const moreMovies = await searchMovies(query.trim(), nextPage);
    setResults(moreMovies);
    setPage(nextPage);
    setHasMore(moreMovies.length === 10);
    setLoading(false);
  }, [page, query, hasMore, loading]);

  return (
    <SafeAreaView style={searchStyles.container}>
      <View>
        <TextInput
          placeholder="Buscar película"
          value={query}
          onChangeText={setQuery}
          style={searchStyles.input}
        />
        <Pagination
          page={page}
          hasMore={hasMore}
          onLoadMore={loadMore}
          onSearch={handleSearch}
        />
        {loading && page === 1 ? (
          <ActivityIndicator style={{marginTop: 20}} />
        ) : (
          <SearchResults results={results} navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
