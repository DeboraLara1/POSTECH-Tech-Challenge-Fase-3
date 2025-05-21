import React, { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { Transaction } from '../types/transaction';
import { getTransactions, getTransactionIcon, getTransactionColor } from '../services/transactionService';
import { cacheService } from '../../src/infrastructure/services/cacheService';

const CACHE_KEYS = {
  TRANSACTIONS: 'cache_transactions',
};

// CONTEXT API
const TransactionsContext = createContext<any>(null);

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = async () => {
    try {
      const cachedTransactions = await cacheService.get<Transaction[]>(CACHE_KEYS.TRANSACTIONS);
      if (cachedTransactions) {
        setTransactions(cachedTransactions);
        setLoading(false);
        return;
      }
      const data = getTransactions();
      await cacheService.set(CACHE_KEYS.TRANSACTIONS, data);
      setTransactions(data);
      setLoading(false);
    } catch (err) {
      setError('Erro ao carregar transações');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const addTransaction = async (newTransaction: Omit<Transaction, 'id'>) => {
    try {
      const id = transactions.length > 0 ? Math.max(...transactions.map(t => t.id)) + 1 : 1;
      const transaction: Transaction = {
        ...newTransaction,
        id,
      };
      const updatedTransactions = [transaction, ...transactions];
      await cacheService.set(CACHE_KEYS.TRANSACTIONS, updatedTransactions);
      setTransactions(updatedTransactions);
      return true;
    } catch (err) {
      setError('Erro ao adicionar transação');
      return false;
    }
  };

  const getIcon = (type: Transaction['type']) => getTransactionIcon(type);
  const getColor = (type: Transaction['type']) => getTransactionColor(type);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      loading,
      error,
      getIcon,
      getColor,
      addTransaction,
      refreshTransactions: fetchTransactions
    }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionsContext);
}; 