import { getMessaging } from 'firebase/messaging';

export const AsksForPermission = async () => {
  try {
    const messaging = getMessaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('User token:', token);
    return token;
  } catch (error) {
    console.error(error);
  }
};