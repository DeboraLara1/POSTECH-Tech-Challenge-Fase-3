import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { router } from "expo-router";
import Footer from "../../app/components/layout/Footer";
import Header from "../../app/components/layout/Header";

const { width, height } = Dimensions.get("window");

const vantagensImages = [
  require("../../assets/img/Vantagem 1.png"),
  require("../../assets/img/Vantagem 2.png"),
  require("../../assets/img/Vantagem 3.png"),
  require("../../assets/img/Vantagem 4.png"),
];

const Home = () => {
  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.content}>
        <ImageBackground
          source={require("../../assets/img/background-home.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <ScrollView 
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.banner}>
              <Text style={styles.title}>
                Experimente mais liberdade no controle da sua vida financeira.
                Crie sua conta com a gente!
              </Text>
              <Image
                source={require("../../assets/img/ilustração-banner.png")}
                style={styles.illustration}
                resizeMode="contain"
              />
            </View>

            <View style={styles.vantagens}>
              <Text style={styles.subtitle}>Vantagens do nosso banco:</Text>
              {vantagensImages.map((image, index) => (
                <Image 
                  key={index} 
                  source={image} 
                  style={styles.vantagemImage}
                  resizeMode="contain"
                />
              ))}
            </View>

            <TouchableOpacity 
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>Acessar minha conta</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: Platform.OS === 'ios' ? 40 : 20,
    paddingHorizontal: 10,
    minHeight: height * 0.8,
  },
  banner: {
    alignItems: "center",
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: width < 768 ? width * 0.05 : 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#fff",
    paddingHorizontal: 10,
    lineHeight: width < 768 ? width * 0.07 : 32,
  },
  illustration: {
    width: width < 768 ? width * 0.8 : 400,
    height: width < 768 ? height * 0.3 : 300,
  },
  vantagens: {
    alignItems: "center",
    marginTop: 20,
    width: '100%',
  },
  subtitle: {
    fontSize: width < 768 ? width * 0.045 : 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#fff",
  },
  vantagemImage: {
    width: width < 768 ? width * 0.7 : 500,
    height: width < 768 ? height * 0.2 : 200,
    marginVertical: 5,
  },
  loginButton: {
    backgroundColor: '#004d61',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 20,
    width: width < 768 ? width * 0.8 : 400,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: width < 768 ? 16 : 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
