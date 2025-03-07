import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native';

const NotFoundScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.errorContainer, { minHeight: height }]}>
      <Text style={styles.title}>Ops! Não encontramos a página...</Text>
      <Text style={styles.message}>
        E olha que exploramos o universo procurando por ela!{'\n'}
        Que tal voltar e tentar novamente?
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => { /* Navegação para a página inicial */ }}>
        <Text style={styles.buttonText}>Voltar ao início</Text>
      </TouchableOpacity>

      <View style={styles.errorIllustration}>
        <Image
          source={require('../assets/img/Ilustração 404.png')}
          style={[styles.errorImage, { width: width < 768 ? 250 : 300 }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    backgroundColor: '#f8f8f8',
    padding: 20,
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00334e',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff5b37',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorIllustration: {
    marginTop: 40,
    alignItems: 'center',
  },
  errorImage: {
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default NotFoundScreen;
