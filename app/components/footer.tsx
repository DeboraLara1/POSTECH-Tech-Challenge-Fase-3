import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      {/* Coluna de Serviços */}
      <View style={styles.footerColumn}>
        <Text style={styles.footerTitle}>Serviços</Text>
        <Text style={styles.footerText}>Conta corrente</Text>
        <Text style={styles.footerText}>Conta PJ</Text>
        <Text style={styles.footerText}>Cartão de crédito</Text>
      </View>

      {/* Coluna de Contato */}
      <View style={styles.footerColumn}>
        <Text style={styles.footerTitle}>Contato</Text>
        <Text style={styles.footerText}>0800 000 123 45</Text>
        <Text style={styles.footerText}>meajuda.com.br</Text>
        <Text style={styles.footerText}>cvc.com.br</Text>
      </View>

      {/* Coluna de Desenvolvimento */}
      <View style={styles.footerColumnDev}>
        <Text style={styles.footerTitle}>Desenvolvido por Alura</Text>
        <Image
          source={require('../../assets/img/Logo-branco.png')}
          style={styles.logo}
        />
        <View style={styles.socialIcons}>
          <Image source={require('../../assets/img/Logo-branco.png')} style={styles.socialIcon} />
          <Image source={require('../../assets/img/Logo-branco.png')} style={styles.socialIcon} />
          <Image source={require('../../assets/img/Logo-branco.png')} style={styles.socialIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#000',
    padding: 10,
    flexWrap: 'wrap',
  },
  footerColumn: {
    flex: 1,
    margin: 10,
    minWidth: '30%',
  },
  footerColumnDev: {
    flex: 1,
    margin: 10,
    minWidth: '30%',
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  socialIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default Footer;
