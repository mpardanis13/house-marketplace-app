import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBizZN4gA3N-RRswAdl76qCg_ZKQrJZG68',
	authDomain: 'house-marketplace-app-ea12e.firebaseapp.com',
	projectId: 'house-marketplace-app-ea12e',
	storageBucket: 'house-marketplace-app-ea12e.appspot.com',
	messagingSenderId: '897942402771',
	appId: '1:897942402771:web:bbc7d25bd187adbac14626',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
