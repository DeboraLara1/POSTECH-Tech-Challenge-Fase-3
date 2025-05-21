import { create } from 'zustand';
import { Card } from '../../domain/entities/Card';
import { CardRepository } from '../../infrastructure/repositories/CardRepository';
import { devtools } from 'zustand/middleware';

interface CardStore {
  cards: Card[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  fetchCards: () => Promise<void>;
  addCard: (card: Omit<Card, 'id'>) => Promise<void>;
  updateCard: (id: string, card: Partial<Card>) => Promise<void>;
  deleteCard: (id: string) => Promise<void>;
  setSearchQuery: (query: string) => void;
  getFilteredCards: () => Card[];
}

const cardRepository = new CardRepository();

export const useCardStore = create<CardStore>()(
  devtools(
    (set, get) => ({
      cards: [],
      loading: false,
      error: null,
      searchQuery: '',

      setSearchQuery: (query: string) => set({ searchQuery: query }),

      getFilteredCards: () => {
        const { cards, searchQuery } = get();
        if (!searchQuery) return cards;
        return cards.filter(card => 
          card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.number.includes(searchQuery)
        );
      },

      fetchCards: async () => {
        set({ loading: true, error: null });
        try {
          const cards = await cardRepository.getCards();
          set({ cards, loading: false });
        } catch (error) {
          set({ error: 'Erro ao carregar cartões', loading: false });
        }
      },

      addCard: async (card) => {
        set({ loading: true, error: null });
        try {
          const newCard = await cardRepository.addCard(card);
          set((state) => ({ cards: [...state.cards, newCard], loading: false }));
        } catch (error) {
          set({ error: 'Erro ao adicionar cartão', loading: false });
        }
      },

      updateCard: async (id, card) => {
        set({ loading: true, error: null });
        try {
          const updatedCard = await cardRepository.updateCard(id, card);
          set((state) => ({
            cards: state.cards.map((c) => (c.id === id ? updatedCard : c)),
            loading: false,
          }));
        } catch (error) {
          set({ error: 'Erro ao atualizar cartão', loading: false });
        }
      },

      deleteCard: async (id) => {
        set({ loading: true, error: null });
        try {
          await cardRepository.deleteCard(id);
          set((state) => ({
            cards: state.cards.filter((c) => c.id !== id),
            loading: false,
          }));
        } catch (error) {
          set({ error: 'Erro ao deletar cartão', loading: false });
        }
      },
    }),
    { name: 'CardStore' }
  )
); 