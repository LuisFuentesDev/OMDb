import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {Movie, SearchResultsProps} from '../types/types';
import searchStyles from '../styles/searchStyles';

const SearchResults = ({results, navigation}: SearchResultsProps) => {
  const renderItem = ({item}: {item: Movie}) => (
    <TouchableOpacity
      style={searchStyles.item}
      onPress={() => navigation.navigate('Details', {imdbID: item.imdbID})}>
      <Text style={{fontFamily: 'Avenir-Heavy'}}>{item.Title}</Text>
      <Text style={{fontFamily: 'Avenir-Medium'}}>{item.Year}</Text>
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
