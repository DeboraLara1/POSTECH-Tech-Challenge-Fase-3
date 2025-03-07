import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { Auth, getAuth, initializeAuth } from "firebase/auth";
//@ts-ignore
import { getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1nwm87wXu0z6dyJuMSVUnz7kqrONu7J0",
  authDomain: "fiap-7a2b2.firebaseapp.com",
  projectId: "fiap-7a2b2",
  storageBucket: "fiap-7a2b2.appspot.com",
  messagingSenderId: "144374054580",
  appId: "1:144374054580:android:e99272dc164afbbc1061e1",
};

let app: FirebaseApp;
let auth: Auth;

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} else {
  app = getApp();
  auth = getAuth(app);
}

export { app, auth };
