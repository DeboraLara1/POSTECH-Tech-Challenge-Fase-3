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
    width: width * 0.45, // 45% da largura da tela
    height: width * 0.45, // Mantendo um formato quadrado proporcional
    alignItems: 'center',
    justifyContent: 'center',
    margin: width * 0.05, // Margem de 5% da largura da tela
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  iconCardSmall: {
    width: '40%', // 40% do tamanho do card
    height: '40%',
    marginTop: '10%',
  },
  cardBody: {
    marginTop: '5%',
    width: '80%', // 80% da largura do card para o texto não ficar muito largo
  },
  cardTitle: {
    fontSize: width * 0.04, // Texto responsivo baseado na largura da tela
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardSmall;
