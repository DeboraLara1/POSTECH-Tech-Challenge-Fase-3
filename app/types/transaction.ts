export type TransactionType = 'pix_in' | 'pix_out' | 'bank_slip' | 'card';

export interface Transaction {
  id: number;
  type: TransactionType;
  description: string;
  value: string;
  date: string;
  time: string;
} 