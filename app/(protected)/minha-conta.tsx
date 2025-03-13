import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Minha Conta</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Digite seu nome"
            />
            <MaterialIcons
              name="edit"
              size={20}
              color="gray"
              style={styles.icon}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu email"
              keyboardType="email-address"
            />
            <MaterialIcons
              name="edit"
              size={20}
              color="gray"
              style={styles.icon}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Digite sua senha"
              secureTextEntry
            />
            <MaterialIcons
              name="edit"
              size={20}
              color="gray"
              style={styles.icon}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        </TouchableOpacity>
        <Image
          source={require("../../assets/png/Ilustração-my-count.png")}
          style={styles.image}
        />
      
      </View>
    </View>
  );
};
//debora.lara@fiap.com
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 310,
    height: 238,
    marginTop: 20,
    marginBottom: 20,
    left: 12,
  },
  card: {
    width: 360,
    backgroundColor: "#CBCBCB",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  input: {
    width: 290,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#47A138",
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    marginTop: 20,
    width: 280,
    height: 48,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#FF5031",
    borderColor: "#FF5031",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
  
});

export default Index;
