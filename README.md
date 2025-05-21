# Byte Bank - Aplicativo Mobile

## 📱 Sobre o Projeto

Byte Bank é um aplicativo mobile desenvolvido para gerenciamento financeiro pessoal, oferecendo uma interface moderna e intuitiva para controle de transações, cartões e investimentos. O aplicativo foi desenvolvido como parte do Tech Challenge da Pós-Tech em parceria com a Fiap.

### Principais Funcionalidades

- 💳 Gerenciamento de cartões de crédito e débito
- 💰 Controle de transações financeiras
- 📊 Acompanhamento de investimentos
- 📱 Interface moderna e responsiva
- 🔒 Autenticação segura
- 📄 Comprovantes de transações

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) - Framework para desenvolvimento mobile
- [Expo](https://expo.dev/) - Plataforma para desenvolvimento React Native
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [React Navigation](https://reactnavigation.org/) - Navegação entre telas
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Armazenamento local
- [React Native Paper](https://callstack.github.io/react-native-paper/) - Componentes UI
- [Expo Document Picker](https://docs.expo.dev/versions/latest/sdk/document-picker/) - Seleção de documentos
- [React Native Picker](https://github.com/react-native-picker/picker) - Componente de seleção

## 🚀 Primeiros Passos

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI
- Android Studio (para emulador Android)
- Xcode (para emulador iOS - apenas macOS)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/DeboraLara1/POSTECH-Tech-Challenge-Fase-3.git
```
```bash
cd byte-bank
```

2. Instale as dependências:
```bash
npm install
```
ou

```bash
yarn install
```

3. Inicie o projeto:
```bash
npx expo start
```

4. Para executar em um emulador:
- Android: Pressione 'a' no terminal após iniciar o projeto
- iOS: Pressione 'i' no terminal após iniciar o projeto (apenas macOS)

### Estrutura do Projeto

```
byte-bank/
├── app/
│   ├── components/    # Componentes reutilizáveis
│   ├── hooks/         # Custom hooks
│   ├── services/      # Serviços e APIs
│   ├── types/         # Definições de tipos TypeScript
│   └── (protected)/   # Rotas protegidas
├── assets/            # Imagens e recursos
├── src/
│   ├── infrastructure/ # Serviços de infraestrutura
│   └── presentation/   # Stores e lógica de apresentação
└── App.tsx            # Ponto de entrada do aplicativo
```

## 📱 Funcionalidades Implementadas

### Autenticação
- Login com credenciais
- Proteção de rotas
- Persistência de sessão

### Dashboard
- Visualização de saldo
- Cartão principal
- Nova transação
- Extrato de transações

### Transações
- Adição de novas transações
- Upload de comprovantes
- Histórico de transações
- Filtros por tipo

### Cartões
- Visualização de cartões
- Detalhes do cartão
- Funções de bloqueio e configuração

### Investimentos
- Visualização de investimentos
- Estatísticas de rendimento
- Gráficos de distribuição

## 👥 Autores

- **Debora Lara** - *Desenvolvimento* - [DeboraLara1](https://github.com/DeboraLara1)

## 🙏 Agradecimentos

- FIAP
- Pós-Tech
