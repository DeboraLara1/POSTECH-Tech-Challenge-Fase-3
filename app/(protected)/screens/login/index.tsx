import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login</Text>
      <Link href="/">Ir para pag inicial</Link> 
      <Link href="./contact">Ir para contact</Link> 
    </View>
  );
}
