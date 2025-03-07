import React from "react";
import { View, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import CardComponent from "@/app/components/card-center";
import TransactionCard from "@/app/components/card-new-transaction";

export default function Index() {
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <CardComponent />
        <TransactionCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20, // Para evitar que os itens fiquem colados no topo
  },
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
});

