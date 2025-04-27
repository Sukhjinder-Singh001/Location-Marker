import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { FIREBASE_CONFIG } from '../config/constants';

const app = getApps().length === 0 ? initializeApp(FIREBASE_CONFIG) : getApp();

export const db = getFirestore(app);
