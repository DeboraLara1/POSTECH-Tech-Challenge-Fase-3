import { View, Text } from 'react-native';
import { Slot } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return (
    // usar para o menu sanduiche
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
          }}
        />
         <Drawer.Screen
          name="dashboard"
          options={{
            drawerLabel: "Dashboard",
          }}
        />
        <Drawer.Screen
          name="login"
          options={{
            drawerLabel: "Login",
          }}
        />

        <Drawer.Screen
          name="contact"
          options={{
            drawerLabel: "Contato",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}