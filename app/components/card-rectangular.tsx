import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

interface CardRectangularProps {
  title: string;
  valueInvestment: string;
}

const CardRectangular: React.FC<CardRectangularProps> = ({ title, valueInvestment }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.card, { width: width * 0.9 }]}>
      <View style={styles.cardContent}>
        <Text style={styles.titleCard}>{title}</Text>
        <Text style={styles.valueInvestmentCard}>{valueInvestment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#004d61',
    borderRadius: 8,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center',
  },
  cardContent: {
    alignItems: 'center',
  },
  titleCard: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  valueInvestmentCard: {
    fontSize: 22,
    color: '#fff',
  },
});

export default CardRectangular;
