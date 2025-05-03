import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import searchStyles from '../styles/searchStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

type PaginationProps = {
  page: number;
  hasMore: boolean;
  onLoadMore: () => void;
  onSearch: () => void;
};

const Pagination = ({page, hasMore, onLoadMore, onSearch}: PaginationProps) => {
  return (
    <View>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          width: 100,
          height: 30,
          borderRadius: 5,
        }}>
        <TouchableOpacity
          onPress={onSearch}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={15} color="white" />
          <Text style={[searchStyles.buttonText, {marginLeft: 6}]}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={[
            {
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              width: 120,
              height: 30,
              borderRadius: 5,
              flexDirection: 'row',
            },
            page === 1 && {opacity: 0.5},
          ]}
          disabled={page === 1}
          onPress={() => onLoadMore()}>
          <FontAwesomeIcon icon={faAngleLeft} size={15} color="white" />
          <Text style={[searchStyles.buttonText, {marginLeft: 5}]}>
            Anterior
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            width: 120,
            height: 30,
            borderRadius: 5,
            flexDirection: 'row',
          }}
          disabled={!hasMore}
          onPress={() => onLoadMore()}>
          <Text style={[searchStyles.buttonText, {marginRight: 5}]}>
            Siguiente
          </Text>
          <FontAwesomeIcon icon={faAngleRight} size={15} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagination;
