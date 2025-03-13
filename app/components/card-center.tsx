import React from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";

const CardComponent = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.card, { height: height * 0.5 }]}>
      <View style={[styles.contentCard, width < 472 && styles.contentCardColumn]}>
        <View style={styles.contentOne}>
          <Text style={[styles.greeting, { fontSize: width * 0.06 }]}>
            Olá, Joana! :)
          </Text>
          <Text style={[styles.date, { fontSize: width * 0.035 }]}>
            Quinta-feira, 08/09/2024
          </Text>
        </View>

        <View style={[styles.contentTwo, { width: width < 472 ? "100%" : "40%" }]}>
          <View style={styles.saldoContainer}>
            <Text style={[styles.saldoText, { fontSize: width * 0.05 }]}>Saldo</Text>
            <Image
              source={require("../../assets/svg/ícone-olho.svg")}
              style={[styles.eyeIcon, { width: width * 0.07, height: width * 0.07 }]}
            />
          </View>
          <View style={styles.line} />
          <Text style={[styles.typeSaldo, { fontSize: width * 0.04 }]}>Conta Corrente</Text>
          <Text style={[styles.saldoValue, { fontSize: width * 0.08 }]}>
            R$ 2.500,00
          </Text>
        </View>
      </View>

      <Image
        source={require("../../assets/png/Ilustração1.png")}
        style={[
          styles.watermarkIlustracao,
          { width: width < 752 ? width * 0.3 : 0, height: width < 752 ? width * 0.2 : 0 }
        ]}
      />
      <Image
        source={require("../../assets/png/Pixels3-card.png")}
        style={[
          styles.watermark,
          {
            left: width < 472 ? "65%" : 0,
            width: width * 0.25,
            height: width * 0.25,
          }
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width:360,
    borderRadius: 8,
    backgroundColor: "#004d61",
    padding: 20,
    overflow: "hidden",
    position: "relative",
  },
  contentCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
  },
  contentCardColumn: {
    flexDirection: "column",
    alignItems: "center",
  },
  contentOne: {
    marginLeft: 24,
    color: "#ffffff",
  },
  greeting: {
    color: "#ffffff",
    marginTop: 24,
  },
  date: {
    color: "#ffffff",
    marginTop: 24,
  },
  contentTwo: {
    marginTop: "12.6%",
    marginRight: "5.2%",
    color: "#ffffff",
  },
  saldoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  saldoText: {
    marginRight: 25,
    color: "#ffffff",
  },
  eyeIcon: {
    tintColor: "#ffffff",
  },
  line: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#ff5031",
    marginVertical: 16,
  },
  typeSaldo: {
    marginBottom: 8,
    color: "#ffffff",
  },
  saldoValue: {
    color: "#ffffff",
  },
  watermark: {
    position: "absolute",
    bottom: 0,
    opacity: 0.5,
  },
  watermarkIlustracao: {
    position: "absolute",
    bottom: 0,
    left: "10%",
    opacity: 0.5,
  },
});

export default CardComponent;
