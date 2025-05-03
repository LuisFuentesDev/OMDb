// FavoriteItem.tsx
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import {FavoriteItemProps, RootStackParamList} from '../types/types';
import favoriteStyles from '../styles/favoriteStyles';
import {useNavigation} from '@react-navigation/native';

const FavoriteItem: React.FC<FavoriteItemProps> = ({item, onRemove}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={[
        favoriteStyles.item,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      ]}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {imdbID: item.imdbID});
          }}>
          <Text style={favoriteStyles.title}>{item.Title}</Text>
        </TouchableOpacity>
        <Text style={{fontFamily: 'Avenir-Heavy'}}>{item.Year}</Text>
      </View>
      <TouchableOpacity onPress={() => onRemove(item.imdbID)}>
        <FontAwesomeIcon icon={faTrash} size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteItem;
