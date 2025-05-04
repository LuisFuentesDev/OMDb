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
          backgroundColor: 'black',
          paddingRight: 8,
        },
      ]}>
      <View style={{flex: 1, paddingRight: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {imdbID: item.imdbID});
          }}>
          <Text
            style={favoriteStyles.title}
            numberOfLines={2} // 👈 Permite hasta 2 líneas
            ellipsizeMode="tail" // Agrega "..." si es demasiado largo
          >
            {item.Title}
          </Text>
        </TouchableOpacity>
        <Text style={{fontFamily: 'Avenir-Heavy', color: '#fff'}}>
          {item.Year}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => onRemove(item.imdbID)}
        style={{marginLeft: 8}}>
        <FontAwesomeIcon icon={faTrash} size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteItem;
