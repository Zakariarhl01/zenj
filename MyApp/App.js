// App.js

// Importation des bibliothèques et des composants nécessaires
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';


// Importation des écrans
import HomeScreen from './screens/HomeScreen';
import OtherScreen from './screens/OtherScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import ContactScreen from './screens/ContactScreen';

// Importation des styles pour le DrawerContent
import DrawerContentStyles from './styles/DrawerContentStyle'; // Crée ce fichier si nécessaire

// Création des navigateurs
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

/**
 * Composant pour la barre de menu en bas de l'écran
 * Utilise un Tab Navigator pour naviguer entre les différentes pages
 */
function BottomMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false, // Masque le header par défaut des onglets
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Accueil') {
            iconName = 'home';
          } else if (route.name === 'Autre') {
            iconName = 'arrow-forward';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Définition des onglets */}
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Autre" component={OtherScreen} />
    </Tab.Navigator>
  );
}

/**
 * Contenu du tiroir de navigation (Drawer)
 * Contient les liens vers Profil, Paramètres et Contact
 */
function CustomDrawerContent(props) {
  return (
    <View style={DrawerContentStyles.drawerContainer}>
      {/* Chaque élément pourrait être un lien vers une autre page */}
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text style={DrawerContentStyles.drawerItem}>Accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <Text style={DrawerContentStyles.drawerItem}>Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
        <Text style={DrawerContentStyles.drawerItem}>Paramètres</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Contact')}>
        <Text style={DrawerContentStyles.drawerItem}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Composant principal de l'application
 * Configure la navigation générale avec le Drawer Navigator
 */
export default function App() {
  return (
    // NavigationContainer est nécessaire pour gérer l'état de navigation
    <NavigationContainer>
      {/* Drawer.Navigator configure le tiroir de navigation */}
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Utilise le contenu personnalisé du Drawer
        screenOptions={{
          headerShown: false, // Masque les headers par défaut des écrans du Drawer
        }}
      >
        {/* Ajoute la barre de menu en bas comme écran principal */}
        <Drawer.Screen name="Home" component={BottomMenu} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
