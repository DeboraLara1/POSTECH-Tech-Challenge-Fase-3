import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { getCardInfo } from '../../services/cardService';

const CardMyCard: React.FC = () => {
  const { width } = useWindowDimensions();
  const cardInfo = getCardInfo();

  return (
    <View style={[styles.card, { width: width * 0.95 }]}>
      <View style={styles.cardBody}>
        <View style={styles.watermarkOne} />
        <View style={styles.contentCard}>
          <View style={styles.header}>
            <Text style={styles.cardInfo}>{cardInfo.type}</Text>
            <Text style={styles.cardInfo}>{cardInfo.category}</Text>
          </View>
          <View style={styles.middle}>
            <View style={styles.chipImage} />
            <Text style={styles.cardNumber}>{cardInfo.number}</Text>
          </View>
          <View style={styles.footer}>
            <View>
              <Text style={styles.cardHolder}>{cardInfo.holderName}</Text>
              <Text style={styles.validUntil}>VÁLIDO ATÉ: {cardInfo.expiryDate}</Text>
            </View>
            <View style={styles.mastercardIcon} />
          </View>
        </View>
        <View style={styles.watermark} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#004d61',
    borderRadius: 15,
    marginTop: 20,
    padding: 10,
    alignSelf: 'center',
  },
  cardBody: {
    width: '100%',
    position: 'relative',
    padding: 16,
    height: 200,
  },
  watermarkOne: {
    position: 'absolute',
    right: -20,
    top: -10,
    width: 60,
    height: 60,
    opacity: 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 30,
  },
  watermark: {
    position: 'absolute',
    left: -20,
    bottom: -10,
    width: 60,
    height: 60,
    opacity: 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 30,
  },
  contentCard: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfo: {
    color: '#fff',
    fontWeight: '600',
  },
  middle: {
    marginVertical: 20,
  },
  chipImage: {
    width: 50,
    height: 40,
    marginBottom: 10,
    backgroundColor: '#e0a040',
    borderRadius: 5,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardHolder: {
    color: '#fff',
    fontSize: 14,
  },
  validUntil: {
    color: '#fff',
    fontSize: 10,
  },
  mastercardIcon: {
    width: 50,
    height: 30,
    backgroundColor: '#ff5f00',
    borderRadius: 5,
  },
});

export default CardMyCard; 