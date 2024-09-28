import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { VueFire, getCurrentUser } from 'vuefire'

export default defineNuxtPlugin(nuxtApp => {
  // Initialize Firebase
  const analytics = getAnalytics(nuxtApp.$firebaseApp);
  const db = getFirestore(nuxtApp.$firebaseApp)

  // Initialize VueFire
  nuxtApp.vueApp.use(VueFire, { firebaseApp: nuxtApp.$firebaseApp })

  return {
    provide: {
      db,
      getCurrentUser: () => getCurrentUser(nuxtApp.$firebaseApp)
    }
  }
})