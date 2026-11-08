import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const DEFIS = ["cours", "saute", "tourne", "cache", "danse"];
export default function App() {
  const [valeur, setValeur] = useState(Math.floor(Math.random() * DEFIS.length));

  function autreDefi() {
   let nv=Math.floor(Math.random() * DEFIS.length);
   while (nv === valeur) {
    nv=Math.floor(Math.random() * DEFIS.length);
   }
   setValeur(nv);
  }
  return (

    <View style={styles.container}>
      <Text style={styles.titre}>NOCTURNE 🌙</Text>
      <Text style={styles.slogan}>LA NUIT APPARTIENT AUX FOUS</Text>
      <Text style={styles.slogan}>{DEFIS[valeur]}</Text>
      <Pressable onPress={autreDefi}>
        <Text style={styles.press}>🎲 Autre défi</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titre: {
    color: '#C9A7FF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  slogan: {
    color: '#888',
    fontSize: 15,
  },

  press: {
    color: '#C9A7FF',
    fontSize: 15,
    marginTop: 20,
  },
});
