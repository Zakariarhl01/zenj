// Importation de StyleSheet depuis React Native pour créer des styles
import { StyleSheet } from 'react-native';

// Création et exportation des styles utilisés pour l'écran HomeScreen
const styles = StyleSheet.create({
  // Style pour le conteneur principal qui enveloppe tout le contenu
  container: {
    flex: 1, // Utilise tout l'espace disponible
    justifyContent: 'center', // Centre le contenu verticalement
    alignItems: 'center', // Centre le contenu horizontalement
    backgroundColor: '#fff', // Définit la couleur de fond en blanc
  },
  
  // Style pour le conteneur du logo en haut à gauche
  logoContainer: {
    position: 'absolute', // Positionne de façon absolue par rapport à l'écran
    top: 50, // Décale de 50 pixels depuis le haut de l'écran
    left: 20, // Décale de 20 pixels depuis la gauche de l'écran
  },

  // Style pour l'image du logo
  logo: {
    width: 50, // Définit la largeur du logo
    height: 50, // Définit la hauteur du logo
    resizeMode: 'contain', // Ajuste l'image pour qu'elle ne soit pas déformée
  },

  // Style pour le bouton du menu en haut à droite (3 barres)
  menuButton: {
    position: 'absolute', // Positionne de façon absolue
    top: 50, // Décale de 50 pixels depuis le haut
    right: 20, // Décale de 20 pixels depuis la droite
    padding: 10, // Ajoute du padding interne
  },

  // Style pour le texte du bouton menu (3 barres)
  menuText: {
    fontSize: 30, // Définit une grande taille de police
  },

  // Style pour le gros bouton rouge au centre de l'écran
  redButton: {
    backgroundColor: 'red', // Définit la couleur de fond en rouge
    paddingVertical: 20, // Ajoute un padding vertical pour le bouton
    paddingHorizontal: 40, // Ajoute un padding horizontal pour le bouton
    borderRadius: 10, // Arrondit les coins du bouton
    elevation: 5, // Ajoute une ombre pour Android
    shadowColor: '#000', // Définit la couleur de l'ombre pour iOS
    shadowOffset: { width: 0, height: 2 }, // Décale l'ombre
    shadowOpacity: 0.25, // Définit l'opacité de l'ombre
    shadowRadius: 3.84, // Définit le rayon de l'ombre
  },

  // Style pour le texte à l'intérieur du bouton rouge
  redButtonText: {
    color: 'white', // Définit la couleur du texte en blanc
    fontSize: 18, // Définit la taille du texte
    fontWeight: 'bold', // Rend le texte gras
    textAlign: 'center', // Centre le texte à l'intérieur du bouton
  },
});

// Exportation des styles pour les utiliser dans d'autres fichiers
export default styles;
