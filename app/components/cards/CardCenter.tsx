import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { getAccountInfo } from '../../services/accountService';

const CardCenter: React.FC = () => {
  const { width } = useWindowDimensions();
  const accountInfo = getAccountInfo();

  return (
    <View style={[styles.card, { width: width * 0.95 }]}>
      <View style={styles.cardBody}>
        <Image
          source={require('../../../assets/png/Pixels3-card.png')}
          style={styles.watermarkOne}
        />
        <View style={styles.contentCard}>
          <View style={styles.account}>
            <View style={styles.accountInfo}>
              <Text style={styles.accountNumber}>Banco: {accountInfo.bankCode}</Text>
              <Text style={styles.accountNumber}>Agência: {accountInfo.branchNumber}</Text>
              <Text style={styles.accountNumber}>Conta: {accountInfo.accountNumber}</Text>
            </View>
            <View style={styles.accountBalance}>
              <Text style={styles.accountBalanceLabel}>Saldo disponível</Text>
              <Text style={styles.accountBalanceValue}>{accountInfo.balance}</Text>
            </View>
          </View>
        </View>
        <Image
          source={require('../../../assets/png/Pixels3-card.png')}
          style={styles.watermark}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#004d61',
    borderRadius: 8,
    marginTop: 20,
    padding: 20,
    alignSelf: 'center',
  },
  cardBody: {
    width: '100%',
    position: 'relative',
    padding: 16,
  },
  watermarkOne: {
    position: 'absolute',
    right: -20,
    top: -10,
    width: 60,
    height: 60,
    opacity: 0.5,
  },
  watermark: {
    position: 'absolute',
    left: -20,
    bottom: -10,
    width: 60,
    height: 60,
    opacity: 0.5,
  },
  contentCard: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  account: {
    width: '100%',
  },
  accountInfo: {
    marginBottom: 20,
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
  accountBalance: {
    alignSelf: 'center',
  },
  accountBalanceLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
  },
  accountBalanceValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
});

export default CardCenter; 