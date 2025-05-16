import React, { lazy, Suspense } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';

// Lazy loading dos componentes
const CardCenter = lazy(() => import('../components/cards/CardCenter'));
const CardExtrato = lazy(() => import('../components/cards/CardExtrato'));
const InvestmentStats = lazy(() => import('../components/investments/InvestmentStats'));

// Componente de loading
const LoadingComponent = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#004d61" />
  </View>
);

const Investments = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Suspense fallback={<LoadingComponent />}>
          <CardCenter />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <InvestmentStats />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <CardExtrato />
        </Suspense>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flexGrow: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
});

export default Investments;

//debora.lara@fiap.com
//123456