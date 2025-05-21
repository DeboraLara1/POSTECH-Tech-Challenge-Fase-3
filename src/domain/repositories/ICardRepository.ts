import { Card } from '../entities/Card';

export interface ICardRepository {
  getCards(): Promise<Card[]>;
  getCardById(id: string): Promise<Card | null>;
  addCard(card: Omit<Card, 'id'>): Promise<Card>;
  updateCard(id: string, card: Partial<Card>): Promise<Card>;
  deleteCard(id: string): Promise<void>;
} 