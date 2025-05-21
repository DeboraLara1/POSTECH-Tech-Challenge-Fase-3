import { Transaction, TransactionType } from "../types/transaction";

const mockTransactions: Transaction[] = [
  { id: 1, type: 'pix_in', description: 'PIX Recebido - João', value: '+ R$ 100,00', date: '06/07/2023', time: '12:35' },
  { id: 2, type: 'pix_out', description: 'PIX Enviado - Maria', value: '- R$ 75,00', date: '05/07/2023', time: '15:20' },
  { id: 3, type: 'bank_slip', description: 'Boleto - Luz', value: '- R$ 120,00', date: '03/07/2023', time: '10:45' },
  { id: 4, type: 'card', description: 'Pagamento Cartão', value: '- R$ 235,50', date: '01/07/2023', time: '18:30' },
  { id: 5, type: 'pix_in', description: 'PIX Recebido - Carlos', value: '+ R$ 80,00', date: '30/06/2023', time: '09:15' },
];

export const getTransactions = (): Transaction[] => {
  return mockTransactions;
};

export const getTransactionIcon = (type: TransactionType): string => {
  switch (type) {
    case 'pix_in':
      return '↓';
    case 'pix_out':
      return '↑';
    case 'bank_slip':
      return '⊙';
    case 'card':
      return '⊗';
    default:
      return '•';
  }
};

export const getTransactionColor = (type: TransactionType): string => {
  switch (type) {
    case 'pix_in':
      return '#00a86b';
    case 'pix_out':
    case 'bank_slip':
    case 'card':
      return '#ff0000';
    default:
      return '#000';
  }
}; 