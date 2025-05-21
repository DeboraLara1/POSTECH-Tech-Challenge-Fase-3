import React, { useEffect, useMemo } from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import CardCenter from '../components/cards/CardCenter';
import CardMyCard from '../components/cards/CardMyCard';
import { useCardStore } from '../../src/presentation/stores/useCardStore';

const MeusCartoes = () => {
  const { 
    cards, 
    loading, 
    error, 
    fetchCards,
    getFilteredCards,
    searchQuery
  } = useCardStore();

  useEffect(() => {
    fetchCards();
  }, []);

  const filteredCards = useMemo(() => getFilteredCards(), [cards, searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CardCenter cards={filteredCards} loading={loading} error={error} />
        <CardMyCard cards={filteredCards} loading={loading} error={error} />
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
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default React.memo(MeusCartoes);

//debora.lara@fiap.com
//123456
