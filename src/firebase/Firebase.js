import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAzhz1dbTgVY643pd4RTpn7i75RFSSwsqQ",
  authDomain: "fir-push-notifications-7fe2d.firebaseapp.com",
  projectId: "fir-push-notifications-7fe2d",
  storageBucket: "fir-push-notifications-7fe2d.appspot.com",
  messagingSenderId: "605977833285",
  appId: "1:605977833285:web:31eb4b97b426f91e0b982c"
};

export const StartsFirebase = async () => {
  // Initialize the Firebase app
  const app = initializeApp(firebaseConfig);

  // Get the messaging instance
  const messaging = getMessaging(app);

  try {
    // Request permission to send notifications
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      // Get the registration token for the current user
      const token = await getToken(messaging);

      // Now you can use the token to send notifications to this user
      console.log('Firebase Cloud Messaging token:', token);
    } else {
      console.error('Permission denied for notifications');
    }
  } catch (error) {
    console.error('Error getting Firebase Cloud Messaging token:', error);
  }
};
