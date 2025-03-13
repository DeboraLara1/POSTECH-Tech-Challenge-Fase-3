import { Link } from "expo-router";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showNewUser, setShowNewUser] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sideMenuAnim = useRef(new Animated.Value(-250)).current; // Inicializa fora da tela

  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleNewUser = () => setShowNewUser(!showNewUser);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    Animated.timing(sideMenuAnim, {
      toValue: menuOpen ? -250 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/img/Logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.nav}>
        <TouchableOpacity>
          <Text style={styles.navLink}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navLink}>Serviços</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.primaryBtn} onPress={toggleNewUser}>
          <Link href="/signup">
            <Text style={styles.btnText}>Abrir minha conta</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryBtn} onPress={toggleLogin}>
          <Link href="./login">
            <Text style={styles.btnText}>Já tenho conta</Text>
          </Link>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.hamburgerMenu} onPress={toggleMenu}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </TouchableOpacity>

      <Animated.View
        style={[styles.sideMenu, { transform: [{ translateX: sideMenuAnim }] }]}
      >
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.closeBtn}>Voltar ao início</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navLink}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navLink}>Serviços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryBtn} onPress={toggleNewUser}>
          <Text style={styles.btnText}>Abrir minha conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryBtn} onPress={toggleLogin}>
          <Text style={styles.btnText}>Já tenho conta</Text>
        </TouchableOpacity>
      </Animated.View>

      {showLogin && (
        <View style={styles.overlay}>
          <Text>Login Component</Text>
        </View>
      )}
      {showNewUser && (
        <View style={styles.overlay}>
          <Text>New Account Component</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000",
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  nav: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "center",
  },
  navLink: {
    color: "#47a138",
    marginHorizontal: 10,
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "flex-end",
  },
  primaryBtn: {
    backgroundColor: "#47a138",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  secondaryBtn: {
    backgroundColor: "#000",
    borderWidth: 2,
    borderColor: "#47a138",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
  hamburgerMenu: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 25,
    width: 30,
  },
  bar: {
    height: 4,
    backgroundColor: "#47a138",
    marginVertical: 3,
  },
  sideMenu: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 250,
    height: "100%",
    backgroundColor: "#000",
    padding: 20,
  },
  closeBtn: {
    fontSize: 18,
    color: "#47a138",
    fontWeight: "bold",
    marginBottom: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
