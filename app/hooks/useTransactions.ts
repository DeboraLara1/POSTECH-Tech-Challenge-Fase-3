import { useState, useEffect } from 'react';
import { Transaction } from '../types/transaction';
import { getTransactions, getTransactionIcon, getTransactionColor } from '../services/transactionService';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = () => {
      try {
        // Em um cenário real, aqui poderia ter uma chamada API assíncrona
        const data = getTransactions();
        setTransactions(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar transações');
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const getIcon = (type: Transaction['type']) => getTransactionIcon(type);
  const getColor = (type: Transaction['type']) => getTransactionColor(type);

  return {
    transactions,
    loading,
    error,
    getIcon,
    getColor
  };
}; 