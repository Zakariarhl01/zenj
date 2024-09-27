// screens/ProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/ProfileScreenStyle';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Titre de la page */}
      <Text style={styles.titleText}>Profil Utilisateur</Text>

      {/* Bouton pour éditer le profil */}
      <TouchableOpacity style={[styles.button, styles.blueButton]}>
        <Text style={styles.buttonText}>Modifier Profil</Text>
      </TouchableOpacity>

      {/* Bouton pour voir les activités */}
      <TouchableOpacity style={[styles.button, styles.greenButton]}>
        <Text style={styles.buttonText}>Voir Activités</Text>
      </TouchableOpacity>

      {/* Bouton pour déconnexion */}
      <TouchableOpacity style={[styles.button, styles.redButton]}>
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
}