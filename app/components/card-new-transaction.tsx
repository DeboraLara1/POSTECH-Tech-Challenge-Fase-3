import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";

const TransactionCard = () => {
  const { width } = useWindowDimensions();
  const [selectedTransaction, setSelectedTransaction] = useState("");
  const [transactionValue, setTransactionValue] = useState("");
  const [selectedFile, setSelectedFile] =
    useState<DocumentPicker.DocumentPickerAsset | null>(null);

  const saveTransaction = async () => {
    if (!selectedTransaction || !transactionValue) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    const transaction = {
      type: selectedTransaction,
      value: transactionValue,
      fileName: selectedFile ? selectedFile.name : null, 
    };

    try {
      const existingTransactions = await AsyncStorage.getItem("transactions");
      const transactions = existingTransactions
        ? JSON.parse(existingTransactions)
        : [];

      transactions.push(transaction);
      await AsyncStorage.setItem("transactions", JSON.stringify(transactions));

      console.log("Transações após salvar:", transactions);

      Alert.alert("Transação", "Transação registrada com sucesso!");
      setSelectedTransaction("");
      setTransactionValue("");
      setSelectedFile(null); 
    } catch (error) {
      console.error("Erro ao salvar transação:", error);
      Alert.alert("Erro", "Não foi possível salvar a transação.");
    }
  };

  const handleFileSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      if (result.canceled) return;

      const file = result.assets[0];
      setSelectedFile(file);
    } catch (error) {
      console.error("Erro ao selecionar o arquivo:", error);
    }
  };

  return (
    <View style={[styles.card, { height: width < 462 ? 550 : 520 }]}>
      <View style={styles.contentCard}>
        <View style={styles.formTransaction}>
          <Text style={styles.titleCard}>Nova transação</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedTransaction}
              onValueChange={(itemValue) => setSelectedTransaction(itemValue)}
              style={styles.picker}
            >
              <Picker.Item
                label="Selecione o tipo de transação"
                value=""
                enabled={false}
              />
              <Picker.Item label="Depósito" value="Depósito" />
              <Picker.Item label="Transferência" value="Transferência" />
            </Picker>
          </View>

          <View style={styles.groupValue}>
            <Text style={styles.valorTransaction}>Valor</Text>
            <TextInput
              style={styles.transaction}
              placeholder="00,00"
              keyboardType="numeric"
              value={transactionValue}
              onChangeText={(text) => setTransactionValue(text)}
            />
          </View>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handleFileSelect}
          >
            <Text style={styles.uploadText}>📂 Selecionar Arquivo</Text>
          </TouchableOpacity>

          {selectedFile && (
            <Text style={styles.fileName}>{selectedFile.name}</Text>
          )}

          <TouchableOpacity
            style={styles.btnTransaction}
            onPress={saveTransaction}
          >
            <Text style={styles.btnText}>Concluir transação</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#cbcbcb",
    marginTop: 24,
    position: "relative",
    overflow: "hidden",
    padding: 20,
    marginBottom: 24,
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
  uploadButton: {
    width: 255,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 12,
  },
  uploadText: {
    fontSize: 16,
    color: "#004d61",
    fontWeight: "bold",
  },
  fileName: {
    textAlign: "center",
    fontSize: 14,
    color: "#004d61",
    marginBottom: 10,
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
});

export default TransactionCard;
