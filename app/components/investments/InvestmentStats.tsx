import React, { memo, useMemo } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import CardRectangular from '../ui/CardRectangular';
import { getInvestmentData } from '../../services/investmentService';

// Componente memoizado para os cards retangulares
const MemoizedCardRectangular = memo(CardRectangular);

const InvestmentStats: React.FC = () => {
  const { width } = useWindowDimensions();
  
  // Memoiza os dados de investimento para evitar recálculos desnecessários
  const investmentData = useMemo(() => getInvestmentData(), []);

  // Memoiza os cards de investimento
  const investmentCards = useMemo(() => (
    <View style={styles.cards}>
      <MemoizedCardRectangular 
        title={investmentData.fixedIncome.title} 
        valueInvestment={investmentData.fixedIncome.value} 
      />
      <MemoizedCardRectangular 
        title={investmentData.variableIncome.title} 
        valueInvestment={investmentData.variableIncome.value} 
      />
    </View>
  ), [investmentData]);

  return (
    <View style={[styles.card, { width: width * 0.95 }]}>
      <View style={styles.cardBody}>
        <View style={styles.watermarkOne} />
        <View style={styles.contentCard}>
          <View style={styles.group}>
            <Text style={styles.titleCard}>Investimentos</Text>
            <Text style={styles.titleTotal}>Total: {investmentData.totalValue}</Text>
            {investmentCards}
          </View>
          <View style={styles.group}>
            <Text style={styles.titleCardEstatistica}>Estatísticas</Text>
            <Text style={styles.titleTotal}>Total: {investmentData.totalValue}</Text>
            <View style={styles.cards}>
              <View style={styles.cardLarge}>
                <Text style={styles.titleCard}>Gráfico Estatístico</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.watermark} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardBody: {
    padding: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  watermarkOne: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 77, 97, 0.1)',
    borderRadius: 50,
  },
  watermark: {
    position: 'absolute',
    bottom: -30,
    left: -30,
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0, 77, 97, 0.1)',
    borderRadius: 30,
  },
  contentCard: {
    gap: 20,
  },
  group: {
    gap: 10,
  },
  titleCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d61',
  },
  titleCardEstatistica: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d61',
    marginTop: 10,
  },
  titleTotal: {
    fontSize: 16,
    color: '#666',
  },
  cards: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  cardLarge: {
    flex: 1,
    height: 200,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(InvestmentStats); 