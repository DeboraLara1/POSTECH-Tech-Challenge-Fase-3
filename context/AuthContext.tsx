import { auth } from "../firebase/config";
import { router } from "expo-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';

interface IAuthContext {
  user: UserCredential | null;
  login: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserCredential | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkStoredUser = async () => {
      const storedUid = await SecureStore.getItemAsync('userUid');
      if (storedUid) {
        setIsAuthenticated(true);
      }
    };
    checkStoredUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential);
      setIsAuthenticated(true);
      await SecureStore.setItemAsync('userUid', userCredential.user.uid);
      console.log("AuthProvider :: login - usuário cadastrado com sucesso", userCredential );
      return true;
    } catch (error) {
      return false;
    }
  };

  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.replace("/login");
        console.log("AuthProvider :: signUp - usuário cadastrado com sucesso" );
      })
      .catch((err) => {
        console.log("AuthProvider :: signUp - Falha", err);
      });
  };

  const logout = async () => {
    console.log("AuthProvider :: logout - usuário deslogado com sucesso");
    auth.signOut();
    setUser(null);
    setIsAuthenticated(false);
    await SecureStore.deleteItemAsync('userUid');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signUp,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "contexto não encontado, useAuth deve estar dentro de AuthProvider"
    );
  }
  return context;
};
