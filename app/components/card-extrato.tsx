import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CardExtrato = () => {
  const { width, height } = useWindowDimensions();
  const [transactions, setTransactions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [editedType, setEditedType] = useState("");
  const [editedValue, setEditedValue] = useState("");
  const [editedFileName, setEditedFileName] = useState("");

  const loadTransactionData = async () => {
    try {
      const storedTransactions = await AsyncStorage.getItem("transactions");
      if (storedTransactions) {
        setTransactions(JSON.parse(storedTransactions));
      } else {
        setTransactions([]);
      }
    } catch (error) {
      console.error("Erro ao carregar os dados do AsyncStorage:", error);
      Alert.alert("Erro ao carregar os dados");
    }
  };

  const deleteTransaction = async (index) => {
    try {
      const updatedTransactions = transactions.filter(
        (_, idx) => idx !== index
      );
      await AsyncStorage.setItem(
        "transactions",
        JSON.stringify(updatedTransactions)
      );
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error("Erro ao excluir transação:", error);
      Alert.alert("Erro", "Não foi possível excluir a transação.");
    }
  };

  const openEditModal = (transaction, index) => {
    setCurrentTransaction(index);
    setEditedType(transaction.type);
    setEditedValue(transaction.value.toString());
    setEditedFileName(transaction.fileName || "");
    setModalVisible(true);
  };

  const saveEditedTransaction = async () => {
    if (!editedType || !editedValue) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const updatedTransactions = [...transactions];
      updatedTransactions[currentTransaction] = {
        type: editedType,
        value: editedValue,
        fileName: editedFileName,
      };
      await AsyncStorage.setItem(
        "transactions",
        JSON.stringify(updatedTransactions)
      );
      setTransactions(updatedTransactions);
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao editar transação:", error);
      Alert.alert("Erro", "Não foi possível editar a transação.");
    }
  };

  useEffect(() => {
    loadTransactionData();
    const intervalId = setInterval(() => {
      loadTransactionData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={[styles.card, { width: width * 0.95, height: height * 0.7 }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Extrato</Text>
      </View>

      <Text style={styles.month}>Mês</Text>

      <View style={{ flexGrow: 1 }}>
        <FlatList
          data={transactions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.row}>
              <Text style={styles.deposit}>{item.type}</Text>
              <Text style={styles.value}>R$ {item.value}</Text>
              <Text style={styles.fileName}>
                {item.fileName || "Sem arquivo"}
              </Text>
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => openEditModal(item, index)}>
                  <Text style={styles.editText}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTransaction(index)}>
                  <Text style={styles.deleteText}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.noTransactions}>
              Nenhuma transação registrada.
            </Text>
          }
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        />
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Transação</Text>
            <TextInput
              style={styles.input}
              placeholder="Tipo de transação"
              value={editedType}
              onChangeText={setEditedType}
            />
            <TextInput
              style={styles.input}
              placeholder="Valor"
              value={editedValue}
              keyboardType="numeric"
              onChangeText={setEditedValue}
            />
            <TextInput
              style={styles.input}
              placeholder="Nome do Arquivo"
              value={editedFileName}
              onChangeText={setEditedFileName}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={saveEditedTransaction}
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  fileName: {
    fontSize: 14,
    color: "#555",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  deposit: { fontSize: 14 },
  value: { fontSize: 16, fontWeight: "bold" },
  fileName: { fontSize: 12, color: "gray" },
  actions: { flexDirection: "row", gap: 8 },
  editText: { fontSize: 18, color: "blue" },
  deleteText: { fontSize: 18, color: "red" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButtons: { flexDirection: "row", justifyContent: "space-between" },
  saveButton: { backgroundColor: "#47A138", padding: 10, borderRadius: 5 },
  cancelButton: { backgroundColor: "gray", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default CardExtrato;
