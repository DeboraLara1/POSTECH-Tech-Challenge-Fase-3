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
} from "react-native";
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
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.content}>
        <ImageBackground
          source={require("../../assets/img/background-home.png")}
          style={styles.background}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.banner}>
              <Text style={styles.title}>
                Experimente mais liberdade no controle da sua vida financeira.
                Crie sua conta com a gente!
              </Text>
              <Image
                source={require("../../assets/img/ilustração-banner.png")}
                style={styles.illustration}
              />
            </View>

            <View style={styles.vantagens}>
              <Text style={styles.subtitle}>Vantagens do nosso banco:</Text>
              {vantagensImages.map((image, index) => (
                <Image key={index} source={image} style={styles.vantagemImage} />
              ))}
            </View>
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
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    minHeight: height * 0.8,
  },
  banner: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#fff",
    paddingHorizontal: 10,
  },
  illustration: {
    width: width * 0.8,
    height: height * 0.3,
    resizeMode: "contain",
  },
  vantagens: {
    alignItems: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#fff",
  },
  vantagemImage: {
    width: width * 0.7,
    height: height * 0.2,
    resizeMode: "contain",
    marginVertical: 5,
  },
});

export default Home;
