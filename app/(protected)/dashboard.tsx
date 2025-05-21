import React, { useEffect } from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import CardCenter from "../components/cards/CardCenter";
import CardNewTransaction from "../components/cards/CardNewTransaction";
import CardExtrato from "../components/cards/CardExtrato";
import { useCardStore } from "../../src/presentation/stores/useCardStore";

const Dashboard = () => {
  const { cards, loading, error, fetchCards } = useCardStore();

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CardCenter cards={cards} loading={loading} error={error} />
        <CardNewTransaction />
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

export default Dashboard;

