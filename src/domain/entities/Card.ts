export interface Card {
  id: string;
  number: string;
  holderName: string;
  expiryDate: string;
  cvv: string;
  type: 'credit' | 'debit';
  balance?: number;
  limit?: number;
} 