// screens/SettingsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/SettingsScreenStyle';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      {/* Titre de la page */}
      <Text style={styles.titleText}>Paramètres</Text>

      {/* Bouton pour changer le mot de passe */}
      <TouchableOpacity style={[styles.button, styles.blueButton]}>
        <Text style={styles.buttonText}>Changer Mot de Passe</Text>
      </TouchableOpacity>

      {/* Bouton pour notifications */}
      <TouchableOpacity style={[styles.button, styles.greenButton]}>
        <Text style={styles.buttonText}>Préférences de Notifications</Text>
      </TouchableOpacity>

      {/* Bouton pour les autorisations */}
      <TouchableOpacity style={[styles.button, styles.orangeButton]}>
        <Text style={styles.buttonText}>Gérer les Autorisations</Text>
      </TouchableOpacity>
    </View>
  );
}