import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const TransactionCard = () => {
  const { width } = useWindowDimensions();
  const [selectedTransaction, setSelectedTransaction] = useState("");

  return (
    <View style={[styles.card, { height: width < 462 ? 500 : 478 }]}>
      {/* Marca d'água superior */}
      <Image
        source={require("../../assets/png/Pixels3-card.png")}
        style={[styles.watermarkOne, { width: width < 752 ? 70 : 100 }]}
      />

      {/* Conteúdo principal */}
      <View style={styles.contentCard}>
        <View style={styles.formTransaction}>
          <Text style={styles.titleCard}>Nova transação</Text>

          {/* Picker (Dropdown) */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedTransaction}
              onValueChange={(itemValue) => setSelectedTransaction(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione o tipo de transação" value="" enabled={false} />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>

          {/* Input de valor */}
          <View style={styles.groupValue}>
            <Text style={styles.valorTransaction}>Valor</Text>
            <TextInput
              style={styles.transaction}
              placeholder="00,00"
              keyboardType="numeric"
            />
          </View>

          {/* Botão */}
          <TouchableOpacity style={styles.btnTransaction}>
            <Text style={styles.btnText}>Concluir transação</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Marcas d'água */}
      {width < 462 && (
        <Image
          source={require("../../assets/png/Ilustração2.png")}
          style={styles.watermarkIlustracao}
        />
      )}

      <Image
        source={require("../../assets/png/Pixels3-card.png")}
        style={[styles.watermark, { width: width < 752 ? 70 : 100 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#cbcbcb",
    marginTop: 34,
    position: "relative",
    overflow: "hidden",
    padding: 20,
  },
  contentCard: {
    justifyContent: "center",
    height: "100%",
  },
  formTransaction: {
    marginHorizontal: 32,
  },
  titleCard: {
    color: "#dee9ea",
    fontSize: 25,
    marginBottom: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#004d61",
    backgroundColor: "#fff",
    borderRadius: 4,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    color: "#444444",
  },
  groupValue: {
    alignItems: "center",
    marginBottom: 20,
  },
  valorTransaction: {
    fontSize: 16,
    color: "#dee9ea",
  },
  transaction: {
    width: 255,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#004d61",
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  btnTransaction: {
    width: 255,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#004d61",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  btnText: {
    fontSize: 16,
    color: "#ffffff",
  },
  watermarkOne: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "auto",
    opacity: 0.5,
  },
  watermark: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "auto",
    opacity: 0.5,
  },
  watermarkIlustracao: {
    position: "absolute",
    bottom: 0,
    left: 201,
    width: "35%",
    opacity: 1,
    zIndex: 2,
  },
});

export default TransactionCard;
