export const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR');
};

export const formatCardNumber = (cardNumber: string): string => {
  if (!cardNumber || cardNumber.length < 4) return cardNumber;
  
  const lastFourDigits = cardNumber.slice(-4);
  return `**** **** **** ${lastFourDigits}`;
}; 