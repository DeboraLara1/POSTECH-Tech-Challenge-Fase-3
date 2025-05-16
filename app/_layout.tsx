import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState, lazy, Suspense } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import 'react-native-reanimated';

import { AuthProvider } from '../context/AuthContext';
import { useColorScheme } from './hooks/useColorScheme';

// Impede o SplashScreen de esconder automaticamente
SplashScreen.preventAutoHideAsync();

// Componente de loading reutilizável
const LoadingScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#004d61" />
    <Text style={styles.loadingText}>Carregando...</Text>
  </View>
);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    async function prepareApp() {
      try {
        // Pré-carrega as rotas principais
        const preloadRoutes = async () => {
          const routes = ['/login', '/(protected)/dashboard', '/(protected)/investments'];
          await Promise.all(routes.map(route => router.prefetch(route)));
        };

        // Simular inicialização de recursos
        await Promise.all([
          new Promise(resolve => setTimeout(resolve, 1000)),
          preloadRoutes()
        ]);
      } catch (e) {
        console.warn(e);
      } finally {
        // Indica que o app está pronto para renderizar
        setAppIsReady(true);
      }
    }

    if (loaded) {
      prepareApp();
    }
  }, [loaded, router]);

  useEffect(() => {
    if (appIsReady) {
      // Esconde o SplashScreen quando tudo estiver pronto
      SplashScreen.hideAsync();
      
      // Navega para a tela de login
      router.replace('/login');
    }
  }, [appIsReady, router]);

  if (!loaded || !appIsReady) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Suspense fallback={<LoadingScreen />}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="+not-found" />
          </Stack>
        </Suspense>
      </ThemeProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#004d61',
  },
});
