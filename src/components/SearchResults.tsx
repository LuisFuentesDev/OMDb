import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Movie, SearchResultsProps} from '../types/types';
import searchStyles from '../styles/searchStyles';

const SearchResults: React.FC<SearchResultsProps> = ({results, navigation}) => {
  const renderItem = ({item}: {item: Movie}) => (
    <TouchableOpacity
      style={searchStyles.item}
      onPress={() => navigation.navigate('Details', {imdbID: item.imdbID})}>
      <Text style={{fontFamily: 'Avenir-Heavy', color: '#fff'}}>
        {item.Title}
      </Text>
      <Text style={{fontFamily: 'Avenir-Medium', color: '#fff'}}>
        {item.Year}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={searchStyles.flatListContainer}>
      <FlatList
        data={results}
        keyExtractor={item => item.imdbID}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchResults;
