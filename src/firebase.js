// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyAVJTgRdjedkgbMTOexox_ZKLdReZjnSvU",

	authDomain: "ngoproject-8d32e.firebaseapp.com",

	projectId: "ngoproject-8d32e",

	storageBucket: "ngoproject-8d32e.appspot.com",

	messagingSenderId: "441469040885",

	appId: "1:441469040885:web:f2398504b1e4f20fef6dbc",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

initializeAppCheck(app, {
	provider: new ReCaptchaV3Provider("6LcV-f0oAAAAAE_VcVF2kTpqCMiS2W6l4J7KdD-9"),
	isTokenAutoRefreshEnabled: true,
});
