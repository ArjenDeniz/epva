<!-- components/Login.vue -->
<template>
  <div class="auth-form">
    <h2>Oturum Açın</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="E-posta" required>
      <input v-model="password" type="password" placeholder="Parola" required>
      <button type="submit">Giriş</button>
    </form>
    <p style="text-align: left;">
      <NuxtLink to="/resetp">Şifrenizi mi unuttunuz?</NuxtLink>
    </p>
    <p style="text-align: left;">
      Hesabınız yok mu? <NuxtLink to="/register">Yeni bir hesap oluşturun</NuxtLink>
    </p>
  </div>
</template>

<script setup>
import { authService } from '~/services/authService';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
    await authService.login(email.value, password.value);
    // Handle successful login
    router.push('/icerik'); // Redirect to dashboard after successful login
  } catch (error) {
    console.error('Login error:', error);
    // Handle login error (e.g., show error message)
    alert('Login failed. Please check your credentials and try again.');
  }
};
</script>