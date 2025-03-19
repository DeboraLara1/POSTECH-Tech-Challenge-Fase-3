# React Native Firebase Auth

Este projeto é um aplicativo mobile desenvolvido em React Native com integração ao Firebase para autenticação de usuários e utilizado AsyncStorage para adicionar, editar transações realizadas. 

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- React Native
- Firebase Authentication
- Expo 
- TypeScript 

## 📋 Funcionalidades

- Cadastro de usuários
- Login com e-mail e senha
- Logout

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (caso use Expo)
- [Firebase Console](https://console.firebase.google.com/)

## 🔧 Configuração do Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com/).
2. Crie um novo projeto.
3. No menu "Authentication", ative o provedor de login desejado (E-mail/Senha, Google, etc.).
4. No menu "Configurações do projeto" > "Configuração do SDK", copie as credenciais do Firebase.
5. Caso necessario atualize suas credenciais no arquivo firebase/authContext.tsx:

```
API_KEY=SEU_API_KEY
AUTH_DOMAIN=SEU_AUTH_DOMAIN
PROJECT_ID=SEU_PROJECT_ID
STORAGE_BUCKET=SEU_STORAGE_BUCKET
MESSAGING_SENDER_ID=SEU_MESSAGING_SENDER_ID
APP_ID=SEU_APP_ID
```

## 📦 Instalação e execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/DeboraLara1/POSTECH-Tech-Challenge-Fase-3.git

   cd seu-repositorio
   ```
2. Instale as dependências:
   ```sh
   npm install  
   ```

## 📜 Estrutura do Projeto
```
📂 app
 ┣ 📂 components  # Componentes reutilizáveis
 ┣ 📂 app/(auth)  # Telas sem proteção do aplicativo 
 ┣ 📂 (protected) # Telas protegidas do aplicativo 
 ┣ 📂 firebase    # Integração com Firebase
 ┣ 📂 context     # Context API para gerenciar autenticação
 ┣ 📂 hooks       # Estilos padrao
 ┣ 📂 assets      # Imagens e ícones
```

### 5. Execute cada Projeto
Execute cada projeto com o seguinte comando:
```bash
npm start
```

Observação: 
- Necessario ter um emulador da sua preferencia na sua máquina rodando
