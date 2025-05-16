import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import CardCenter from '../components/cards/CardCenter';
import CardMyCard from '../components/cards/CardMyCard';

const MeusCartoes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CardCenter />
        <CardMyCard />
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

export default MeusCartoes;

//debora.lara@fiap.com
//123456
