/**
 * Formata um valor numérico para o formato de moeda brasileira
 */
export const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

/**
 * Formata uma data para o formato brasileiro (dd/mm/yyyy)
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR');
};

/**
 * Formata um número de cartão para mostrar apenas os últimos 4 dígitos
 */
export const formatCardNumber = (cardNumber: string): string => {
  if (!cardNumber || cardNumber.length < 4) return cardNumber;
  
  const lastFourDigits = cardNumber.slice(-4);
  return `**** **** **** ${lastFourDigits}`;
}; 