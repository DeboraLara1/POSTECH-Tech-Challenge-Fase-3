// Exemplo de uso do CardPaymentCardView
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardPaymentCardView from "./CardPaymentCardView"; // Ajuste o caminho conforme necessário

const MyCardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Cartões</Text>
      <CardPaymentCardView
        nameCard="Byte"
        typeCard="Platinum"
        nameResponsibleCard="Joana Fonseca Gomes"
        numberCard="• • • • • • • •"
        customStyle={{ backgroundColor: "#004d61" }}
      />
      <CardPaymentCardView
        nameCard="Byte"
        typeCard="Platinum"
        nameResponsibleCard="Joana Fonseca Gomes"
        numberCard="• • • • • • • •"
        customStyle={{ backgroundColor: "#8b8b8b" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default MyCardScreen;
