// import { useAuth } from '../../context/AuthContext';
// import { router } from 'expo-router';
// import { View, Text, Button } from 'react-native';

// export default function Profile() {
//   const { logout } = useAuth()
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
//       <Text style={{ fontSize: 24 }}>Profile Page</Text>
//     </View>
//   );
// }
{/* <Button title="Logout" onPress={() => { 
  logout()
  router.replace('/(auth)/login') 
}} /> */}
import React from "react";
import { View, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import CardComponent from "@/app/components/card-center";
import TransactionCard from "@/app/components/card-new-transaction";
import CarExtrato from "@/app/components/card-extrato";

export default function Index() {
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <CardComponent />
        <TransactionCard />
        <CarExtrato/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20, 
  },
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
});

