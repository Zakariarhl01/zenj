// styles/OtherScreenStyle.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Couleur de fond
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    width: 200,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  yellowButton: {
    backgroundColor: 'yellow',
  },
  orangeButton: {
    backgroundColor: 'orange',
  },
  redButton: {
    backgroundColor: 'red',
  },
});