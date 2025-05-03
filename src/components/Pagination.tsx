import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import searchStyles from '../styles/searchStyles';

type PaginationProps = {
  page: number;
  hasMore: boolean;
  onLoadMore: () => void;
  onSearch: () => void;
};

const Pagination = ({page, hasMore, onLoadMore, onSearch}: PaginationProps) => {
  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity onPress={onSearch}>
        <Text style={searchStyles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={[page === 1 && {opacity: 0.5}]}
          disabled={page === 1}
          onPress={() => onLoadMore()}>
          <Text style={searchStyles.buttonText}>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={!hasMore} onPress={() => onLoadMore()}>
          <Text style={searchStyles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagination;
