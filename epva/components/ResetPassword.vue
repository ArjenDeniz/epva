<!-- components/ResetPassword.vue -->
<template>
  <div class="auth-form">
    <h2>Reset Password</h2>
    <form @submit.prevent="resetPassword">
      <input v-model="email" type="email" placeholder="Email" required>
      <button type="submit">Reset Password</button>
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
        // Handle successful password reset request (e.g., show success message)
      } catch (error) {
        console.error('Password reset error:', error);
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