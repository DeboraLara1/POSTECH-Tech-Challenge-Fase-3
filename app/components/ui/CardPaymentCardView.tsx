import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

interface CardPaymentCardViewProps {
  title: string;
  value: string;
}

const CardPaymentCardView: React.FC<CardPaymentCardViewProps> = ({ title, value }) => {
  const { width } = useWindowDimensions();
  
  return (
    <View style={[styles.card, { width: width * 0.4 }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d61',
  },
});

export default CardPaymentCardView; 