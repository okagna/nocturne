
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import Bloc from '../composants/Cartes';

const DEFIS = [   
  "Envoie un compliment sincère à quelqu'un de ton groupe",
  "Imite un pote du groupe, les autres doivent deviner qui c'est",
  "Parle avec un accent étranger pendant les 10 prochaines minutes",
  "Envoie un vocal où tu chantes au dernier contact de ta conversation",
  "Raconte la pire honte de ta vie sans mentir",
  "Laisse le groupe choisir ta photo de profil pour 24h",
];
 
export default function Accueil() {
  const [valeur, setValeur] = useState(Math.floor(Math.random() * DEFIS.length));
 
  function autreDefi() {
    let nv = Math.floor(Math.random() * DEFIS.length);
    while (nv === valeur) {
      nv = Math.floor(Math.random() * DEFIS.length);
    }
    setValeur(nv);
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.titreslogan}>
        <Text style={styles.titre}>
          NOCTURNE <Text style={styles.croissant}>☾</Text>
        </Text>
        <Text style={styles.slogan}>LA NUIT APPARTIENT AUX FOUS</Text>
      </View>
 
      <View style={styles.defisoir}>
        <Text style={styles.cesoir}>🌙 LE DÉFI DE CE SOIR</Text>
        <Text style={styles.ose}>Tu oses ?</Text>
        <Text style={styles.defis}>{DEFIS[valeur]}</Text>
 
        <View style={styles.autredefi}>
          <Pressable
            style={({ pressed }) => [styles.pressdefi, pressed && { backgroundColor: '#1F8A3B' }]}
            onPress={autreDefi}
          >
            <Text style={styles.btnad}>🎲 Autre défi</Text>
          </Pressable>
 
          <Pressable
            style={({ pressed }) => [styles.pressaccepte, pressed && { backgroundColor: '#1F8A3B' }]}
            onPress={() => Alert.alert('Défi accepté !', DEFIS[valeur])}
          >
            <Text style={styles.btnad}>🔥 J’accepte le défi</Text>
          </Pressable>
        </View>
      </View>
     

    <Text style={styles.univers}>Les univers de la nuit</Text>
    <View style={styles.defconf1}>
      <Bloc emoji="🎯" titre="Défis" sousTitre="Ose le ridicule" />
      <Bloc emoji="🎯" titre="Défis" sousTitre="Ose le ridicule" />
      
    </View>  



    <View style={styles.defconf2}>
      <Bloc emoji="🎯" titre="Défis" sousTitre="Ose le ridicule" />
      <Bloc emoji="🎯" titre="Défis" sousTitre="Ose le ridicule" />
      
    </View>  

 </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 65,
  },
 
  titreslogan: {
    width: '95%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20,

  },
 
  titre: {
    color: '#C9A7FF',
    fontSize: 38,
    fontWeight: 'bold',
  },
 
  croissant: {
    color: '#C9A7FF',
  },
 
  slogan: {
    color: '#C9A7FF',
    fontSize: 13,
    fontWeight: '300',
  },
 
  defisoir: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
    backgroundColor: '#1E1433',
    width: '95%',
    minHeight: '20%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
 
  cesoir: {
    color: '#C9A7FF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
 
  ose: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
  },
 
  defis: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    marginTop: 20,
    minHeight: 48, // réserve toujours la place de 2 lignes
    textAlign: 'left',
    flexShrink: 1,
  },
 
  autredefi: {
    alignSelf: 'stretch', // les boutons prennent toute la largeur de la carte
    gap: 10,
    marginTop: 20,
  },
 
  pressdefi: {
    backgroundColor: '#353434',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
 
  pressaccepte: {
    backgroundColor: '#353434',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
 
  btnad: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  defconf1: {
    flexDirection: 'row',
    width: '95%',
    marginTop: 10,
    gap: 10,},

      defconf2: {
    flexDirection: 'row',
    width: '95%',
    marginTop: 10,
    gap: 10,},

    univers: {
      color: '#ffff',
      fontWeight: 'bold',
      fontSize: 20,
      width: '95%',
      marginTop: 20,
},

  

  
});
 
