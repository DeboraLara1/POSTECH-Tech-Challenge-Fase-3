import React, { lazy, Suspense, useEffect } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useCardStore } from '../../src/presentation/stores/useCardStore';

const CardCenter = lazy(() => import('../components/cards/CardCenter'));
const CardExtrato = lazy(() => import('../components/cards/CardExtrato'));
const InvestmentStats = lazy(() => import('../components/investments/InvestmentStats'));

const LoadingComponent = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#004d61" />
  </View>
);

const Investments = () => {
  const { cards, loading, error, fetchCards } = useCardStore();

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Suspense fallback={<LoadingComponent />}>
          <CardCenter cards={cards} loading={loading} error={error} />
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
    alignItems: 'center',
    paddingVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Investments;

//debora.lara@fiap.com
//123456