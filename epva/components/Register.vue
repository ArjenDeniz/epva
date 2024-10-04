<!-- components/Register.vue -->
<template>
  <div class="auth-form">
    <h2>Yeni hesap oluşturun</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="E-posta" required>
      <input v-model="password" type="password" placeholder="Parola" required>
      <button type="submit">Kayıt ol</button>
      <p style="text-align: left;">
      <NuxtLink to="/login">Zaten hesabınız var mı?</NuxtLink>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { authService } from '~/services/authService';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();


    const register = async () => {
      try {
        await authService.register(email.value, password.value);
        router.push('/login');
        // Handle successful registration (e.g., redirect to dashboard)
      } catch (error) {
        console.error('Registration error:', error);
        // Handle registration error (e.g., show error message)
        alert('Kayıt başarısız. Lütfen tekrar deneyin., Hata kodu: ' + error);
      }
    };

    return {
      email,
      password,
      register
    };
  }
};
</script>
