interface CardInfo {
  type: string;
  category: string;
  number: string;
  holderName: string;
  expiryDate: string;
}

const cardInfo: CardInfo = {
  type: 'MASTERCARD',
  category: 'DÉBITO',
  number: '**** **** **** 1234',
  holderName: 'JOÃO DA SILVA',
  expiryDate: '12/25'
};

export const getCardInfo = (): CardInfo => {
  return cardInfo;
}; 