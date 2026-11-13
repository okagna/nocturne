import { StyleSheet, Text, View } from 'react-native';

// Les props arrivent entre { } : ce sont les "réglages" donnés par le parent
export default function Bloc({ emoji, titre, sousTitre }) {
  return (
    <View style={styles.carte}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.titre}>{titre}</Text>
      <Text style={styles.sousTitre}>{sousTitre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  carte: {
    flex: 1,
    backgroundColor: '#1E1433',
    borderRadius: 20,
    padding: 16,},


  emoji: { 
    fontSize: 30, 
    marginBottom: 10 
  },
  titre: { 
    color: '#fff', 
    fontSize: 16,
    marginBottom: 9, 
    fontWeight: '700' },

  sousTitre: { 
    color: '#8A7FA8', 
    fontSize: 13 },
});