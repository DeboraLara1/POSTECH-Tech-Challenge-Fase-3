import React, { useEffect } from "react";
import CardCenter from "../../app/components/cards/CardCenter";
import CardExtrato from "../../app/components/cards/CardExtrato";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { useCardStore } from "../../src/presentation/stores/useCardStore";

const OtherServices = () => {
  const { cards, loading, error, fetchCards } = useCardStore();

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CardCenter cards={cards} loading={loading} error={error} />
        <CardExtrato />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default OtherServices;
