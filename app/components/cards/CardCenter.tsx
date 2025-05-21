import React, { useMemo, memo } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { Card } from '../../../src/domain/entities/Card';

interface CardCenterProps {
  cards: Card[];
  loading: boolean;
  error: string | null;
}

const CardCenter: React.FC<CardCenterProps> = ({ cards, loading, error }) => {
  const { width } = useWindowDimensions();
  const card = cards[0];

  const formattedBalance = useMemo(() => 
    card?.balance?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || '0,00',
    [card?.balance]
  );

  const formattedNumber = useMemo(() => 
    card?.number.replace(/(\d{4})/g, '$1 ').trim(),
    [card?.number]
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!card) {
    return null;
  }

  return (
    <View style={[styles.cardBox, { width: width * 0.95 }]}>
      <Image source={require('../../../assets/png/Pixels3-card.png')} style={styles.bgImage} />
      <View style={styles.cardContent}>
        <Text style={styles.hello}>Olá, Joana! :)</Text>
        <Text style={styles.saldoLabel}>Saldo</Text>
        <Text style={styles.saldoValue}>R$ {formattedBalance}</Text>
        <Text style={styles.cardNumber}>{formattedNumber}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardHolder}>{card.holderName}</Text>
          <Text style={styles.cardExpiry}>{card.expiryDate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: '#004d61',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 180,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: 'center',
  },
  bgImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '60%',
    height: '100%',
    opacity: 0.18,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 24,
    zIndex: 2,
  },
  hello: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  saldoLabel: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 2,
  },
  saldoValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardExpiry: {
    color: '#fff',
    fontSize: 14,
  },
  loadingContainer: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

export default memo(CardCenter); 