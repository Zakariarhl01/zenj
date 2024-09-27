// screens/ContactScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../styles/ContactScreenStyle';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      {/* Titre de la page */}
      <Text style={styles.titleText}>Nous Contacter</Text>

      {/* Bouton pour support technique */}
      <TouchableOpacity style={[styles.button, styles.greenButton]}>
        <Text style={styles.buttonText}>Support Technique</Text>
      </TouchableOpacity>

      {/* Bouton pour assistance commerciale */}
      <TouchableOpacity style={[styles.button, styles.blueButton]}>
        <Text style={styles.buttonText}>Assistance Commerciale</Text>
      </TouchableOpacity>

      {/* Bouton pour FAQ */}
      <TouchableOpacity style={[styles.button, styles.orangeButton]}>
        <Text style={styles.buttonText}>FAQ</Text>
      </TouchableOpacity>
    </View>
  );
}