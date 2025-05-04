import {StyleSheet} from 'react-native';

const detailsStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'black',
    alignItems: 'center',
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'Avenir-Heavy',
    color: '#fff',
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'Avenir-Medium',
    color: '#fff',
  },
  plot: {
    fontSize: 16,
    marginTop: 12,
    textAlign: 'justify',
    fontFamily: 'Avenir-Medium',
    color: '#fff',
  },
});

export default detailsStyles;
