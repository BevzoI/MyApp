import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2WD9DRuJgRvZNRvJoiGuih-xNWlaQvwE", // API ключ
  authDomain: "hw-14-ea780.firebaseapp.com", // домен аутентифікації
  projectId: "hw-14-ea780", // ID проєкту
  storageBucket: "hw-14-ea780.appspot.com", // сховище
  messagingSenderId: "420803899802", // ID відправника повідомлень
  appId: "1:420803899802:web:abcd1234abcd1234abcd12", // ID додатка
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
