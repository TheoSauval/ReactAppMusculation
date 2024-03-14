import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, Image, Alert, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImageName from './img/user.png';
import Programme from './img/programme.jpg';
import Bras from './img/bras.png';
import Dos from './img/dos.png';
import Pecs from './img/pecs.png';
import Jambes from './img/jambes.png';
import Epaules from './img/epaules.png';
import Cardio from './img/cardio.png'
import Progression from './img/progression.jpg';



const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      source: Bras,
      text: "Exercice pour les bras",
    },
    {
      source: Dos,
      text: "Exercice pour le dos",
    },
    {
      source: Pecs,
      text: "Exercice pour les pectoraux",
    },
    {
      source: Jambes,
      text: "Exercice pour les jambes",
    },
    {
      source: Epaules,
      text: "Exercice pour les epaules",
    },
    {
      source: Cardio,
      text: "Exercice pour le cardio",
    },
  ];
  const onImagePress = () => {
    Alert.alert('Image cliquée!', 'Vous avez cliqué sur l\'image.');
  };

  
  const renderItem = ({item}) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.source} style={styles.carouselImage} />
        <Text style={styles.carouselText}>{item.text}</Text>
      </View>
    );
  };
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>De retour !!</Text>
      <Text style={styles.text2}>USER</Text>
      <Image source={ImageName} style={styles.image} />
      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher..."
        placeholderTextColor="#666"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Text style={styles.programme}>Ton programme :</Text>
      <TouchableOpacity onPress={onImagePress}>
        <Image source={Programme} style={styles.programmeimg} />
      </TouchableOpacity>
      <Text style={styles.programmetxt}>Voir mes differents programme ...</Text>
      <Text style={styles.exercice}>Exercice :</Text>
      <Carousel
        layout={"default"}
        data={carouselItems}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={250}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Text style={styles.progression}>Progression :</Text>
      <TouchableOpacity onPress={onImagePress}>
        <Image source={Progression} style={styles.Progressionimg} />
      </TouchableOpacity>
      <Text style={styles.progressiontxt}>Voir ma progression ...</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252525",
    flex: 1,
    alignItems: 'center',
    paddingTop: 140,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 60,
    right: 50,
  },
  text2: {
    color: '#80FF00',
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 60,
    right: 75,
  },
  searchBar: {
    height: 40,
    width: '90%',
    backgroundColor: '#333',
    borderRadius: 20,
    color: '#FFF',
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: 75,
    left: 25,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  programme: {
    color: '#80FF00',
    fontWeight: 'bold',
    fontSize: 20,
    right: 100,
  },
  programmeimg: {
    width: 350,
    height: 200,
    borderRadius: 10,
    opacity: 0.5,
    top: 10,
  },
  programmetxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
    bottom: 20,
    right: 25,
  },
  exercice: {
    color: '#80FF00',
    fontWeight: 'bold',
    fontSize: 20,
    right: 130,
  },
  carouselItem: {
    backgroundColor: '#505050',
    borderRadius: 20,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top: 10,
  },
  carouselImage: {
    width: 250, 
    height: 150, 
  },
  carouselText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#80FF00',
    textAlign: 'center',
  },
  progression: {
    color: '#80FF00',
    fontWeight: 'bold',
    fontSize: 20,
    right: 115,
    top: 25,
  },
  Progressionimg: {
    width: 350,
    height: 200,
    borderRadius: 10,
    opacity: 0.5,
    top: 35,
  },
  progressiontxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
    // bottom: 20,
    right: 70,
    paddingBottom: 40,
  },
});

export default HomeScreen;
