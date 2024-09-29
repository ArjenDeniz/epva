<!-- components/Login.vue -->
<template>
  <div class="auth-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p>
      <a href="#" @click.prevent="showResetPassword">Forgot password?</a>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { authService } from '~/services/authService';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const login = async () => {
      try {
        await authService.login(email.value, password.value);
        // Handle successful login (e.g., redirect to dashboard)
      } catch (error) {
        console.error('Login error:', error);
        // Handle login error (e.g., show error message)
      }
    };

    const showResetPassword = () => {
      // Implement logic to show password reset component or modal
    };

    return {
      email,
      password,
      login,
      showResetPassword
    };
  }
};
</script>

<style lang="scss" scoped>
.auth-form {
  max-width: 300px;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
      padding: 8px;
    }

    button {
      padding: 8px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #45a049;
      }
    }
  }
}
</style>