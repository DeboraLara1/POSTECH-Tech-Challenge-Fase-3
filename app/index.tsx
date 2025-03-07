import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  function LogoTitle() {
    return (
      <Image
        style={styles.image}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen options={{headerTitle: () => <LogoTitle/>}}/>

      <Text>pag inicial</Text>
      <Link href="./screens/login">Ir para login</Link>
      <Link href="./screens/contact">Ir para contact</Link>
      <Link href="./screens/homr">Ir para Home</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
