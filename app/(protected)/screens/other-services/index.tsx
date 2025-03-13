import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import CardComponent from "@/app/components/card-center";
import ServicesCard from "@/app/components/card-services-available";
import CardExtrato from "@/app/components/card-extrato";

const { width, height } = Dimensions.get("window");

const Index = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <CardComponent />
        <ServicesCard />
        <CardExtrato />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: height * 0.02,
  },
  container: {
    width: "100%",
    paddingHorizontal: width * 0.05,
    alignItems: "center",
  },
});

export default Index;
