// screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Importation des styles spécifiques à HomeScreen
import styles from '../styles/HomeScreenStyle';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo en haut à gauche */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Bouton de menu en haut à droite */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()} // Ouvre le tiroir de navigation (Drawer)
      >
        {/* Affiche les 3 barres représentant le menu */}
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {/* Gros bouton rouge au centre de l'écran */}
      <TouchableOpacity
        style={styles.redButton}
        onPress={() => navigation.navigate('Autre')} // Navigue vers 'OtherScreen' lorsqu'on appuie
      >
        <Text style={styles.redButtonText}>Je déclare un {'\n'}INCIDENT</Text>
      </TouchableOpacity>
    </View>
  );
}
