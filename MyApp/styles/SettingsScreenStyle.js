// styles/SettingsScreenStyle.js

// Importation de StyleSheet depuis React Native pour créer des styles
import { StyleSheet } from 'react-native';

// Création et exportation des styles utilisés pour l'écran SettingsScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
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
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  blueButton: {
    backgroundColor: 'blue',
  },
  greenButton: {
    backgroundColor: 'green',
  },
  redButton: {
    backgroundColor: 'red',
  },
});

export default styles;
