import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Transaction } from '../../types/transaction';
import { useTransactions } from '../../hooks/useTransactions';

const CardExtrato: React.FC = () => {
  const { width } = useWindowDimensions();
  const [activeTab, setActiveTab] = useState('extrato');
  const { transactions, loading, error, getIcon, getColor } = useTransactions();

  return (
    <View style={[styles.card, { width: width * 0.95 }]}>
      <View style={styles.cardBody}>
        <Image
          source={require('../../../assets/png/Pixels3-card.png')}
          style={styles.watermarkOne}
        />
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'extrato' && styles.activeTab]}
            onPress={() => setActiveTab('extrato')}
          >
            <Text style={[styles.tabText, activeTab === 'extrato' && styles.activeTabText]}>Extrato</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'comprovantes' && styles.activeTab]}
            onPress={() => setActiveTab('comprovantes')}
          >
            <Text style={[styles.tabText, activeTab === 'comprovantes' && styles.activeTabText]}>Comprovantes</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'extrato' && (
          <>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#004d61" />
                <Text style={styles.loadingText}>Carregando transações...</Text>
              </View>
            ) : error ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            ) : (
              <ScrollView style={styles.transactionsContainer}>
                {transactions.map((transaction: Transaction) => (
                  <View key={transaction.id} style={styles.transactionItem}>
                    <View style={styles.transactionIconContainer}>
                      <Text style={[styles.transactionIcon, { color: getColor(transaction.type) }]}>
                        {getIcon(transaction.type)}
                      </Text>
                    </View>
                    <View style={styles.transactionDetails}>
                      <Text style={styles.transactionDescription}>{transaction.description}</Text>
                      <Text style={styles.transactionDateTime}>{transaction.date} às {transaction.time}</Text>
                    </View>
                    <Text style={[styles.transactionValue, { color: getColor(transaction.type) }]}>
                      {transaction.value}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            )}
          </>
        )}

        {activeTab === 'comprovantes' && (
          <View style={styles.comprovantesContainer}>
            <Text style={styles.emptyStateText}>Sem comprovantes recentes</Text>
          </View>
        )}

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
    backgroundColor: '#cbcbcb',
    borderRadius: 8,
    marginTop: 20,
    padding: 20,
    alignSelf: 'center',
    marginBottom: 20,
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
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  activeTab: {
    borderBottomColor: '#004d61',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#004d61',
    fontWeight: '700',
  },
  loadingContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#ff0000',
  },
  transactionsContainer: {
    maxHeight: 300,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  transactionIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionDateTime: {
    fontSize: 12,
    color: '#666',
  },
  transactionValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  comprovantesContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
  },
});

export default CardExtrato; 