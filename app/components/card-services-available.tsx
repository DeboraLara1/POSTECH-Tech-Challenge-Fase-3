import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CardSmall from './card-small';

const { width } = Dimensions.get('window');

const ServicesCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <Image source={require('../../assets/png/Pixels3-card.png')} style={styles.watermarkOne} />
        <View style={styles.contentCard}>
          <Text style={styles.titleCard}>Confira os serviços disponíveis</Text>
          <ScrollView contentContainerStyle={styles.cardsSmallServices} showsVerticalScrollIndicator={false}>
            <CardSmall imageSource={require('../../assets/svg/icone-empréstimo.svg')} titleCardSmall="Empréstimo" onCardClick={() => {}} />
            <CardSmall imageSource={require('../../assets/svg/icone-cartões.svg')} titleCardSmall="Meus cartões" onCardClick={() => {}} />
            <CardSmall imageSource={require('../../assets/svg/icone-doações.svg')} titleCardSmall="Doações" onCardClick={() => {}} />
            <CardSmall imageSource={require('../../assets/svg/icone-pix.svg')} titleCardSmall="Pix" onCardClick={() => {}} />
            <CardSmall imageSource={require('../../assets/svg/icone-seguros.svg')} titleCardSmall="Seguros" onCardClick={() => {}} />
            <CardSmall imageSource={require('../../assets/svg/credito-celular.svg')} titleCardSmall="Crédito celular" onCardClick={() => {}} />
          </ScrollView>
        </View>
        <Image source={require('../../assets/png/Pixels3-card.png')} style={styles.watermark} />
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
    width: width * 0.9,
    alignSelf: 'center',
  },
  cardBody: {
    position: 'relative',
  },
  contentCard: {
    flexDirection: 'column',
  },
  titleCard: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
  },
  cardsSmallServices: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  watermarkOne: {
    position: 'absolute',
    top: -10,
    right: 10,
    width: width * 0.15,
    height: 80,
    zIndex: 1,
  },
  watermark: {
    position: 'absolute',
    bottom: -50,
    left: 10,
    width: width * 0.15,
    height: 80,
    zIndex: 1,
  },
});

export default ServicesCard;
