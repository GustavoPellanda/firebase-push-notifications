// Asks permission from the user to send notifications

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { firebaseConfig } from '../firebase/Firebase';

export const AsksForPermission = async () => {
  try {
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);

    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      const token = await getToken(messaging);
      console.log('Firebase Cloud Messaging token:', token);
    } else {
      console.error('Permission denied for notifications');
    }
  } catch (error) {
    console.error('Error getting Firebase Cloud Messaging token:', error);
  }
};
