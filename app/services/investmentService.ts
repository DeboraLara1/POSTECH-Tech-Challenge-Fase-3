interface Investment {
  title: string;
  value: string;
}

interface InvestmentData {
  totalValue: string;
  fixedIncome: Investment;
  variableIncome: Investment;
}

// Dados mockados de investimentos
const investmentData: InvestmentData = {
  totalValue: 'R$ 50.000,00',
  fixedIncome: {
    title: 'Renda Fixa',
    value: 'R$ 36.000,00'
  },
  variableIncome: {
    title: 'Renda Variável',
    value: 'R$ 14.000,00'
  }
};

export const getInvestmentData = (): InvestmentData => {
  return investmentData;
};