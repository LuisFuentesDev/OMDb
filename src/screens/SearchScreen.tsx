import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../navigation/AppNavigator';
import {searchMovies} from '../api/omdbApi';

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

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
      style={styles.item}
      onPress={() => navigation.navigate('Details', {imdbID: item.imdbID})}>
      <Text style={styles.title}>{item.Title}</Text>
      <Text>{item.Year}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar película"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
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
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SearchScreen;
