import React from "react";
import { View, StyleSheet } from "react-native";
import CardComponent from "@/app/components/card-center";
import ServicesCard from "@/app/components/card-services-available";

const Index = () => {
  return (
    <View style={styles.container}>
      <CardComponent />
      <ServicesCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
//debora.lara@fiap.com