import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import CardRectangular from './card-rectangular';

const InvestmentStats: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.card, { width: width * 0.95 }]}>
      <View style={styles.cardBody}>
        <Image
          source={require('../../assets/png/Pixels3-card.png')}
          style={styles.watermarkOne}
        />
        <View style={styles.contentCard}>
          <View style={styles.group}>
            <Text style={styles.titleCard}>Investimentos</Text>
            <Text style={styles.titleTotal}>Total: R$ 50.000,00</Text>
            <View style={styles.cards}>
              <CardRectangular title="Renda Fixa" valueInvestment="R$ 36.000,00" />
              <CardRectangular title="Renda Variável" valueInvestment="R$ 14.000,00" />
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.titleCardEstatistica}>Estatísticas</Text>
            <Text style={styles.titleTotal}>Total: R$ 50.000,00</Text>
            <View style={styles.cards}>
              <View style={styles.cardLarge}>
                <Text style={styles.titleCard}>Gráfico Estatístico</Text>
              </View>
            </View>
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
    marginTop: 20,
    padding: 20,
    alignSelf: 'center',
  },
  cardBody: {
    width: '100%',
    position: 'relative',
    padding: 16,
  },
  watermarkOne: {
    position: 'absolute',
    right: -20,
    top: -10,
    width: 60,
    height: 60,
    opacity: 0.5,
  },
  watermark: {
    position: 'absolute',
    left: -20,
    bottom: -10,
    width: 60,
    height: 60,
    opacity: 0.5,
  },
  contentCard: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleCard: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  titleTotal: {
    fontSize: 20,
    fontWeight: '400',
    color: '#004d61',
    textAlign: 'center',
  },
  cards: {
    flexDirection: 'column', // Deixa os cards empilhados
    alignItems: 'center',
  },
  titleCardEstatistica: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
  },
  cardLarge: {
    width: '100%',
    height: 100,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  group: {
    marginBottom: 20,
  },
});

export default InvestmentStats;
