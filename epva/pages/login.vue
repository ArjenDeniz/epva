<template>
  <div>
    <h1>Login</h1>
    <button @click= "signInWithGoogle">Sign in with google </button>
  </div>
</template>

<script setup>
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const router = useRouter();
const auth = useFirebaseAuth();
function signInWithGoogle() {
    signInWithPopup(auth, new GoogleAuthProvider())
        .then(() => 
            router.replace('/dashboard')
        )
}
</script>