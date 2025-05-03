import {StyleSheet} from 'react-native';

const detailsStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Avenir-Heavy',
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'Avenir-Heavy',
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'Avenir-Medium',
  },
  plot: {
    fontSize: 16,
    marginTop: 12,
    textAlign: 'justify',
    fontFamily: 'Avenir-Medium',
  },
});

export default detailsStyles;
