import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";

const CardExtrato = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.card, { width: width * 0.95 }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Extrato</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.month}>Mês</Text>
      <View style={styles.row}>
        <Text style={styles.deposit}>Depósito</Text>
        <Text style={styles.date}>Data</Text>
      </View>
      <Text style={styles.value}>Valor</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 480,
    borderRadius: 8,
    paddingTop: 32,
    paddingRight: 24,
    paddingBottom: 32,
    paddingLeft: 24,
    gap: 16,
    backgroundColor: "#fff",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    marginTop: 26,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    padding: 8,
  },
  month: {
    fontFamily: "Inter",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    color: "#47A13880",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  deposit: {
    fontSize: 14,
    fontWeight: "400",
  },
  date: {
    fontSize: 14,
    fontWeight: "400",
  },
  line: {
    width: 180,
    borderWidth: 1,
    borderColor: "#47A13880",
    alignSelf: "center",
    marginVertical: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default CardExtrato;
