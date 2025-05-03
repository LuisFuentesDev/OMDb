import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {searchMovies} from '../api/omdbApi';
import {Movie, RootStackParamList} from '../types/types';
import searchStyles from '../styles/searchStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const movies = await searchMovies(query.trim());
    setResults(movies);
    setLoading(false);
  };

  const renderItem = ({item}: {item: Movie}) => (
    <TouchableOpacity
      style={searchStyles.item}
      onPress={() => navigation.navigate('Details', {imdbID: item.imdbID})}>
      <Text style={searchStyles.title}>{item.Title}</Text>
      <Text>{item.Year}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={searchStyles.container}>
      <View>
        <TextInput
          placeholder="Buscar película"
          value={query}
          onChangeText={setQuery}
          style={searchStyles.input}
        />
        <Button title="Buscar" onPress={handleSearch} />
        {loading ? (
          <ActivityIndicator style={{marginTop: 20}} />
        ) : (
          <FlatList
            data={results}
            keyExtractor={item => item.imdbID}
            renderItem={renderItem}
            contentContainerStyle={{marginTop: 20}}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
