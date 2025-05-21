import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { isValidEmail, isValidPassword } from '../utils/validations';
import { Asset } from 'expo-asset';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const preloadImage = async () => {
      try {
        await Asset.loadAsync(require('../../assets/png/Ilustração-cadastro.png'));
        setImageLoaded(true);
      } catch (error) {
        console.warn('Erro ao pré-carregar imagem:', error);
      }
    };
    preloadImage();
  }, []);

  const handleLogin = async () => {
    setError('');
    
    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Email inválido');
      return;
    }

    if (!isValidPassword(password)) {
      setError('Senha deve ter pelo menos 6 caracteres');
      return;
    }

    setIsLoading(true);
    
    try {
      const isAuthenticated = await login(email, password);
      if (isAuthenticated) {
        router.replace('/(protected)/dashboard');
      } else {
        setError('Email ou senha incorretos');
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {imageLoaded && (
        <Image 
          source={require('../../assets/png/Ilustração-cadastro.png')} 
          style={styles.image}
          fadeDuration={0}
        />
      )}
      <Text style={styles.title}>Login</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        value={email}  
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      
      <TextInput 
        placeholder="Senha" 
        secureTextEntry 
        style={styles.input} 
        value={password}
        onChangeText={setPassword}  
      />

      <TouchableOpacity 
        style={[styles.button, isLoading && styles.disabledButton]} 
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Carregando...' : 'Entrar'}
        </Text>
      </TouchableOpacity>

      <Link href="/signup" style={styles.signupLink}>
        Não tem uma conta? Cadastre-se
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  image: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#004d61',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#004d61',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupLink: {
    marginTop: 16,
    textAlign: 'center',
    color: '#004d61',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});