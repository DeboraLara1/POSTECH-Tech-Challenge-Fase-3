import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        <View style={styles.linkColumn}>
          <Text style={styles.columnTitle}>Institucional</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DeboraLara1')}>
            <Text style={styles.link}>Sobre nós</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DeboraLara1')}>
            <Text style={styles.link}>Carreiras</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DeboraLara1')}>
            <Text style={styles.link}>Imprensa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linkColumn}>
          <Text style={styles.columnTitle}>Produtos</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DeboraLara1')}>
            <Text style={styles.link}>Contas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DeboraLara1')}>
            <Text style={styles.link}>Cartões</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DeboraLara1')}>
            <Text style={styles.link}>Investimentos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linkColumn}>
          <Text style={styles.columnTitle}>Ajuda</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DeboraLara1')}>
            <Text style={styles.link}>Central de Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DeboraLara1')}>
            <Text style={styles.link}>Segurança</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DeboraLara1')}>
            <Text style={styles.link}>Contato</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomSection}>
        <Text style={styles.copyright}>© 2023 Banco Digital. Todos os direitos reservados.</Text>
        <Text style={styles.legal}>Termos de Uso | Privacidade | Cookies</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#004d61',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  linkColumn: {
    flex: 1,
  },
  columnTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  link: {
    color: '#e0e0e0',
    fontSize: 14,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#003d4e',
    marginBottom: 20,
  },
  bottomSection: {
    alignItems: 'center',
  },
  copyright: {
    color: '#e0e0e0',
    fontSize: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  legal: {
    color: '#c0c0c0',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Footer;