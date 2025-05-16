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
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import CardCenter from "../components/cards/CardCenter";
import CardNewTransaction from "../components/cards/CardNewTransaction";
import CardExtrato from "../components/cards/CardExtrato";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CardCenter />
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

