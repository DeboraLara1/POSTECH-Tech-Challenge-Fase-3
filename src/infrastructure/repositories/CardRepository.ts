import { Card } from '../../domain/entities/Card';
import { ICardRepository } from '../../domain/repositories/ICardRepository';

export class CardRepository implements ICardRepository {
  private cards: Card[] = [
    {
      id: '1',
      number: '1234 5678 9012 3456',
      holderName: 'DEBORA LARA',
      expiryDate: '12/25',
      cvv: '123',
      type: 'credit',
      limit: 5000,
      balance: 2500
    },
    {
      id: '2',
      number: '9876 5432 1098 7654',
      holderName: 'DEBORA LARA',
      expiryDate: '06/26',
      cvv: '456',
      type: 'debit',
      balance: 1500
    }
  ];

  async getCards(): Promise<Card[]> {
    return this.cards;
  }

  async getCardById(id: string): Promise<Card | null> {
    return this.cards.find(card => card.id === id) || null;
  }

  async addCard(card: Omit<Card, 'id'>): Promise<Card> {
    const newCard: Card = {
      ...card,
      id: Math.random().toString(36).substr(2, 9)
    };
    this.cards.push(newCard);
    return newCard;
  }

  async updateCard(id: string, cardData: Partial<Card>): Promise<Card> {
    const index = this.cards.findIndex(card => card.id === id);
    if (index === -1) {
      throw new Error('Card not found');
    }
    this.cards[index] = { ...this.cards[index], ...cardData };
    return this.cards[index];
  }

  async deleteCard(id: string): Promise<void> {
    const index = this.cards.findIndex(card => card.id === id);
    if (index === -1) {
      throw new Error('Card not found');
    }
    this.cards.splice(index, 1);
  }
} 