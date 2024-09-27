// screens/OtherScreen.js 
import React from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native'; 
// Importation des styles spécifiques à OtherScreen 
import styles from '../styles/OtherScreenStyle'; 

export default function OtherScreen() { 
  return ( 
    <View style={styles.container}> 
      {/* Titre de la page */}
      <Text style={styles.titleText}>Gravité de l'incident</Text> 

      {/* Bouton jaune */}
      <TouchableOpacity style={[styles.button, styles.yellowButton]}>
        <Text style={styles.buttonText}>Urgence Mineur</Text>
      </TouchableOpacity>

      {/* Bouton orange */}
      <TouchableOpacity style={[styles.button, styles.orangeButton]}>
        <Text style={styles.buttonText}>Urgence Potentielle</Text>
      </TouchableOpacity>

      {/* Bouton rouge */}
      <TouchableOpacity style={[styles.button, styles.redButton]}>
        <Text style={styles.buttonText}>Urgence Vitale</Text>
      </TouchableOpacity>
    </View> 
  ); 
}