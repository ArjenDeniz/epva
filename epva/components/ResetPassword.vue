<!-- components/ResetPassword.vue -->
<template>
  <div class="auth-form">
    <h2>Şifrenizi yenileyin</h2>
    <form @submit.prevent="resetPassword">
      <input v-model="email" type="email" placeholder="E-posta" required>
      <button type="submit">Gönder</button>
      <p style="text-align: left;">
      <NuxtLink to="/login">Geri dön</NuxtLink>
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

    const resetPassword = async () => {
      try {
        await authService.resetPassword(email.value);
        router.push("/login");
        // Handle successful password reset request (e.g., show success message)
      } catch (error) {
        console.error('Password reset error:', error);
        alert('Şifre yenileme başarısız oldu. Lütfen tekrar deneyin.');
        // Handle password reset error (e.g., show error message)
      }
    };

    return {
      email,
      resetPassword
    };
  }
};
</script>
