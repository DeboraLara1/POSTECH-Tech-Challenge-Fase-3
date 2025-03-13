import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.buttonConfigurar]}>
          <Text style={styles.buttonTextConfigurar}>Configurar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Bloquear</Text>
        </TouchableOpacity>
      </View>
      <CardPaymentCardView
        nameCard="Byte"
        typeCard="Platinum"
        nameResponsibleCard="Joana Fonseca Gomes"
        numberCard="• • • • • • • •"
        customStyle={{ backgroundColor: "#8b8b8b" }}
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.buttonConfigurar]}>
          <Text style={styles.buttonTextConfigurar}>Configurar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Bloquear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#CBCBCB',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "column", 
    alignItems: "center", 
    marginVertical: 20, 
  },
  button: {
    width: 250,
    height: 48,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#BF1313",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: 10, 
  },

  buttonConfigurar: {
    width: 250,
    height: 48,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FF5031",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5031",
    marginBottom: 10, 
  },

  buttonTextConfigurar: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19.2,
    color: "#ffffff",
  },
  
  buttonText: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19.2,
    color: "#BF1313",
  },
});

export default MyCardScreen;
