interface AccountInfo {
  bankCode: string;
  branchNumber: string;
  accountNumber: string;
  balance: string;
}

const accountInfo: AccountInfo = {
  bankCode: '0000',
  branchNumber: '0000',
  accountNumber: '000000000000000',
  balance: 'R$ 5.000.000,00'
};

export const getAccountInfo = (): AccountInfo => {
  return accountInfo;
}; 