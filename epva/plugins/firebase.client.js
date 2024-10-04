// plugins/firebase.js
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { VueFire, getCurrentUser } from 'vuefire'
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
  // Initialize Firebase
  const db = getFirestore(nuxtApp.$firebaseApp)
  const auth = getAuth(nuxtApp.$firebaseApp)
  const analytics = getAnalytics(nuxtApp.$firebaseApp);

  // Provide getCurrentUser as a function that returns a promise
  const getCurrentUserPromise = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  };

  return {
    provide: {
      db,
      getCurrentUser: getCurrentUserPromise,
      auth,
      analytics
    }
  }
})