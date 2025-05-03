const searchStyles = {
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
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
    alignItems: 'center', // Aquí debe ir un valor válido de FlexAlignType como 'center'
    margin: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
};

export default searchStyles;
