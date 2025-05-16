/**
 * Verifica se um email é válido
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Verifica se uma senha atende aos requisitos mínimos
 * Requisitos: pelo menos 6 caracteres
 */
export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

/**
 * Verifica se um CPF é válido (com ou sem formatação)
 */
export const isValidCPF = (cpf: string): boolean => {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '');

  // Verifica se tem 11 dígitos
  if (cpf.length !== 11) return false;

  // Verifica se todos os dígitos são iguais, o que seria inválido
  if (/^(\d)\1+$/.test(cpf)) return false;

  // Aqui implementariamos o algoritmo completo de validação do CPF
  // Versão simplificada para demonstração
  return true;
}; 