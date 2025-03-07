import React from "react";
import { View, Text, Image, StyleSheet, ViewStyle } from "react-native";

interface CardPaymentCardViewProps {
  nameCard: string;
  typeCard: string;
  nameResponsibleCard: string;
  numberCard: string;
  customStyle?: ViewStyle; // Tipo opcional para customStyle
}

const CardPaymentCardView: React.FC<CardPaymentCardViewProps> = ({
  nameCard,
  typeCard,
  nameResponsibleCard,
  numberCard,
  customStyle,
}) => {
  return (
    <View style={[styles.card, customStyle]}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{nameCard}</Text>
        <Text style={styles.typeCard}>{typeCard}</Text>
        <Text style={styles.nameResponsibleCard}>{nameResponsibleCard}</Text>
        <Text>{numberCard}</Text>
      </View>
      <Image
        source={require("../../assets/png/Pixels4.png")}
        style={styles.watermarkCard}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    width: 327,
    height: 164,
    justifyContent: "space-around",
    position: "relative",
    overflow: "hidden",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
    color: "#fff",
  },
  typeCard: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 16,
  },
  nameResponsibleCard: {
    fontFamily: "Montserrat",
    fontSize: 12,
    letterSpacing: 1.1,
    lineHeight: 24,
    fontWeight: "400",
  },
  watermarkCard: {
    position: "absolute",
    right: 9,
    top: "50%",
    transform: [{ translateY: -50 }],
    opacity: 1.3,
    zIndex: 0,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default CardPaymentCardView;
