import { cacheService } from '../../src/infrastructure/services/cacheService';

const CACHE_KEYS = {
  INVESTMENT_DATA: 'cache_investment_data',
};

interface Investment {
  title: string;
  value: string;
}

interface InvestmentData {
  totalValue: string;
  fixedIncome: Investment;
  variableIncome: Investment;
}

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

export const getInvestmentData = async (): Promise<InvestmentData> => {
  // Tenta obter do cache primeiro
  const cachedData = await cacheService.get<InvestmentData>(CACHE_KEYS.INVESTMENT_DATA);
  
  if (cachedData) {
    return cachedData;
  }

  // Se não houver cache, retorna os dados e salva no cache
  await cacheService.set(CACHE_KEYS.INVESTMENT_DATA, investmentData);
  return investmentData;
};