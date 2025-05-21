import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Signup() {
  const { signUp } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleBackToHome = () => {
    router.replace("/home");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Image source={require("../../assets/png/Ilustração-new-Login.png")} />
      <Text style={{ fontSize: 24, marginBottom: 16 }}>
        Preencha os campos abaixo para criar sua conta corrente!
      </Text>

      <TextInput
        placeholder="Digite seu Email"
        style={{ borderWidth: 1, marginBottom: 16, padding: 8 }}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Digite sua Senha"
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 16, padding: 8 }}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Sign Up"
        onPress={() => {
          signUp(email, password);
        }}
      />
      <Link href="/login" style={{ marginTop: 16 }}>
        Already have an account? Log in
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    padding: 8,
  },
  backButtonText: {
    color: "#004d61",
    fontSize: 16,
    fontWeight: "bold",
  },
});
