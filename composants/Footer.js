import { StyleSheet, Text, View } from 'react-native';

// Les props arrivent entre { } : ce sont les "réglages" donnés par le parent
export default function Footer({ acc, defis, confessions, potes, profil }) {
  return (
    <View style={styles.foot}>
        <Text style={styles.espace}>Ton espace nocturne</Text>

      <View style={styles.icones}> 
      <Text style={styles.icone}>{acc}</Text>

      <Text style={styles.icone}>{defis}</Text>
      <Text style={styles.icone}>{confessions}</Text>
      <Text style={styles.icone}>{potes}</Text>
      <Text style={styles.icone}>{profil}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  foot: {
    backgroundColor: '#1E1433',
    borderRadius: 20,
    padding: 10,
    marginTop:15,
    width:'95%'
  },

    espace: { 
      color: '#ffffff', 
      fontSize: 18,
    fontWeight:'bold' },

 icones: { 
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop: 10, 
    
  },


  icone: { 
    fontSize: 30,
    
        color: '#C9A7FF',

    },


});