import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {Movie} from '../types/types';
import searchStyles from '../styles/searchStyles';

type SearchResultsProps = {
  results: Movie[];
  navigation: any;
};

const SearchResults = ({results, navigation}: SearchResultsProps) => {
  const renderItem = ({item}: {item: Movie}) => (
    <TouchableOpacity
      style={searchStyles.item}
      onPress={() => navigation.navigate('Details', {imdbID: item.imdbID})}>
      <Text style={{fontWeight: '800'}}>{item.Title}</Text>
      <Text>{item.Year}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={results}
      keyExtractor={item => item.imdbID}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SearchResults;
