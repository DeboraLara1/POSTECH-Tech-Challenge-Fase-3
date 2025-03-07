import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type CardSmallProps = {
  iconCard: string;
  titleCardSmall: string;
  onCardClick: () => void;
};

const CardSmall: React.FC<CardSmallProps> = ({ iconCard, titleCardSmall, onCardClick }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onCardClick}>
      <Image source={{ uri: iconCard }} style={styles.iconCardSmall} />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{titleCardSmall}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create<{ card: ViewStyle; iconCardSmall: ImageStyle; cardBody: ViewStyle; cardTitle: TextStyle }>({
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 162,
    height: 157,
    margin: 20,
    zIndex: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  iconCardSmall: {
    marginTop: 20,
    width: 60,
    height: 60,
  },
  cardBody: {
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardSmall;
