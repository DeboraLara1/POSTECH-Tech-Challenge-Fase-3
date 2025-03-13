import CardComponent from '@/app/components/card-center';
import CardExtrato from '@/app/components/card-extrato';
import InvestmentStats from '@/app/components/card-investments';
import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CardComponent/>
        <InvestmentStats />
        <CardExtrato/>
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
});

export default Index;

//debora.lara@fiap.com
//123456