import {StyleSheet} from 'react-native';

const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    fontFamily: 'Avenir-Heavy',
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Avenir-Heavy',
    color: '#fff',
  },
  searchButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  pageButton: {
    backgroundColor: 'blue',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    fontFamily: 'Avenir-Heavy',
  },
});

export default searchStyles;
