import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';

// Obtendo as dimensões da tela
const { width } = Dimensions.get('window');

type CardSmallProps = {
  imageSource: ImageSourcePropType;
  titleCardSmall: string;
  onCardClick: () => void;
};

const CardSmall: React.FC<CardSmallProps> = ({ imageSource, titleCardSmall, onCardClick }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onCardClick}>
      <Image source={imageSource} style={styles.iconCardSmall} resizeMode="contain" />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{titleCardSmall}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.45, 
    height: width * 0.45, 
    alignItems: 'center',
    justifyContent: 'center',
    margin: width * 0.05, 
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  iconCardSmall: {
    width: '40%', 
    height: '40%',
    marginTop: '10%',
  },
  cardBody: {
    marginTop: '5%',
    width: '80%',
  },
  cardTitle: {
    fontSize: width * 0.04, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardSmall;
