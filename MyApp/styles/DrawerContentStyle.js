// styles/DrawerContentStyle.js

// Importation de StyleSheet depuis React Native pour créer des styles
import { StyleSheet } from 'react-native';

// Création et exportation des styles utilisés pour le contenu du Drawer
const styles = StyleSheet.create({
  // Style pour le conteneur principal du Drawer
  drawerContainer: {
    flex: 1, // Prend toute la hauteur disponible
    paddingTop: 50, // Ajoute un espace en haut pour éviter la superposition avec la bordure supérieure
    paddingHorizontal: 20, // Ajoute du padding à gauche et à droite
    backgroundColor: '#f0f0f0', // Définit la couleur de fond du Drawer
  },

  // Style pour chaque élément dans le tiroir (drawer)
  drawerItem: {
    fontSize: 20, // Taille du texte
    paddingVertical: 15, // Espacement vertical interne pour chaque item
    borderBottomWidth: 1, // Ajoute une ligne en bas de chaque item
    borderBottomColor: '#ccc', // Couleur de la ligne en bas
  },
});

export default styles;
