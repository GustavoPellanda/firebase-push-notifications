import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

export const firebaseConfig = {
  apiKey: "AIzaSyAzhz1dbTgVY643pd4RTpn7i75RFSSwsqQ",
  authDomain: "fir-push-notifications-7fe2d.firebaseapp.com",
  projectId: "fir-push-notifications-7fe2d",
  storageBucket: "fir-push-notifications-7fe2d.appspot.com",
  messagingSenderId: "605977833285",
  appId: "1:605977833285:web:31eb4b97b426f91e0b982c"
};

export const StartsFirebase = () => {
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);
  return messaging;
};
