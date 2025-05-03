import {RouteProp} from '@react-navigation/native';

export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export type RootStackParamList = {
  Tabs: undefined;
  Details: {imdbID: string};
};

export type TabParamList = {
  Search: undefined;
  Favorites: undefined;
};
