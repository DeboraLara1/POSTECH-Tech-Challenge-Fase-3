import React, { useMemo, memo } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { Card } from '../../../src/domain/entities/Card';

interface CardMyCardProps {
  cards: Card[];
  loading: boolean;
  error: string | null;
}

const CardItem = memo(({ card, width }: { card: Card; width: number }) => {
  const formattedNumber = useMemo(() => 
    card.number.replace(/(\d{4})/g, '$1 ').trim(),
    [card.number]
  );

  return (
    <View style={[styles.cardBox, { width: width * 0.92, alignSelf: 'center' }]}>
      <Image source={require('../../../assets/png/Pixels3-card.png')} style={styles.bgImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardBrand}>Byte</Text>
        <Text style={styles.cardType}>{card.type === 'credit' ? 'Platinum' : 'Débito'}</Text>
        <Text style={styles.cardNumber}>{formattedNumber}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardHolder}>{card.holderName}</Text>
          <Text style={styles.cardExpiry}>{card.expiryDate}</Text>
        </View>
        <View style={styles.cardActions}>
          <Text style={styles.cardFunction}>Função: {card.type === 'credit' ? 'Débito/Crédito' : 'Débito'}</Text>
          <View style={styles.actionsRight}>
            <Text style={styles.configButton}>Configurar</Text>
            <Text style={styles.blockButton}>Bloquear</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const CardMyCard: React.FC<CardMyCardProps> = ({ cards, loading, error }) => {
  const { width } = useWindowDimensions();

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus cartões</Text>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} width={width} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 0,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 8,
    color: '#222',
  },
  cardBox: {
    backgroundColor: '#004d61',
    borderRadius: 14,
    marginBottom: 14,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 120,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  bgImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '60%',
    height: '100%',
    opacity: 0.15,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 14,
    zIndex: 2,
  },
  cardBrand: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  cardType: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 8,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardExpiry: {
    color: '#fff',
    fontSize: 12,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  cardFunction: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  actionsRight: {
    flexDirection: 'row',
    gap: 6,
  },
  configButton: {
    backgroundColor: '#fff',
    color: '#004d61',
    fontWeight: 'bold',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 6,
    fontSize: 11,
  },
  blockButton: {
    backgroundColor: '#e57373',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    fontSize: 11,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

export default memo(CardMyCard); 