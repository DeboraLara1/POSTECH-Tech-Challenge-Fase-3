import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface CardRectangularProps {
  title: string;
  valueInvestment: string;
}

const CardRectangular: React.FC<CardRectangularProps> = ({ title, valueInvestment }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{valueInvestment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#004d61',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CardRectangular; 