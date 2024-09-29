<!-- components/Register.vue -->
<template>
  <div class="auth-form">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Register</button>
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

    const register = async () => {
      try {
        await authService.register(email.value, password.value);
        // Handle successful registration (e.g., redirect to dashboard)
      } catch (error) {
        console.error('Registration error:', error);
        // Handle registration error (e.g., show error message)
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