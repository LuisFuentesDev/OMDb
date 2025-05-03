import { StyleSheet } from "react-native";

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
      },
      info: {
        fontSize: 16,
        marginBottom: 4,
      },
      plot: {
        fontSize: 16,
        marginTop: 12,
        textAlign: 'justify',
      },
});

export default detailsStyles;