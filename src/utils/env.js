import {Platform} from 'react-native';

const liveHost = '';
const localHost = 'http://localhost:5001/mealstogo-bf416/us-central1/';

export const isAndroid = Platform.OS === 'android';

export const isDevelopment = process.env.NODE_ENV === 'development';

export const host = !isDevelopment || isAndroid ? liveHost : localHost;

export const isMock = true;
