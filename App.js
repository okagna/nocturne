import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>NOCTURNE 🌙</Text>
      <Text style={styles.slogan}>LA NUIT APPARTIENT AUX FOUS</Text>

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
});
