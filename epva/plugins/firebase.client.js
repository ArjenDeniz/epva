import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { VueFire, getCurrentUser } from 'vuefire'
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
  // Initialize Firebase
  const db = getFirestore(nuxtApp.$firebaseApp)
  const auth = getAuth(nuxtApp.$firebaseApp)
  const analytics = getAnalytics(nuxtApp.$firebaseApp);
  // Initialize VueFire

  return {
    provide: {
      db,
      getCurrentUser: () => getCurrentUser(nuxtApp.$firebaseApp),
      auth,
      analytics
    }
  }
})