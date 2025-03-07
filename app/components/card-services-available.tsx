import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CardSmall from './card-small';

const ServicesCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <Image
          source={require('../../assets/png/Pixels3-card.png')}
          style={styles.watermarkOne}
        />
        <View style={styles.contentCard}>
          <Text style={styles.titleCard}>Confira os serviços disponíveis</Text>
          <View style={styles.cardsSmallServices}>
            <CardSmall iconCard={require('../../assets/svg/icone-empréstimo.svg')} titleCardSmall="Empréstimo" onCardClick={() => {}} />
            <CardSmall iconCard={require('../../assets/svg/icone-cartões.svg')} titleCardSmall="Meus cartões" onCardClick={() => {}} />
            <CardSmall iconCard={require('../../assets/svg/icone-doações.svg')} titleCardSmall="Doações" onCardClick={() => {}} />
            <CardSmall iconCard={require('../../assets/svg/icone-pix.svg')} titleCardSmall="Pix" onCardClick={() => {}} />
            <CardSmall iconCard={require('../../assets/svg/icone-seguros.svg')} titleCardSmall="Seguros" onCardClick={() => {}} />
            <CardSmall iconCard={require('../../assets/svg/credito-celular.svg')} titleCardSmall="Crédito celular" onCardClick={() => {}} />
          </View>
        </View>
        <Image
          source={require('../../assets/png/Pixels3-card.png')}
          style={styles.watermark}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#cbcbcb',
    borderRadius: 8,
    marginTop: 34,
    padding: 20,
  },
  cardBody: {
    position: 'relative',
  },
  contentCard: {
    flexDirection: 'column',
    height: 478,
  },
  titleCard: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 32,
    marginTop: 30,
  },
  cardsSmallServices: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  watermarkOne: {
    position: 'absolute',
    transform: [{ translateX: 340.5 }, { translateY: -9 }],
    zIndex: 1,
    width: '18%',
    height: 177.47,
  },
  watermark: {
    position: 'absolute',
    transform: [{ translateX: -9 }, { translateY: -91 }],
    zIndex: 1,
    width: '18%',
    height: 177.47,
  },
});

export default ServicesCard;
