<!-- pages/index.vue -->
<template>
  <div class="container">
    <div class="auth-container">
      <Register />
      <Login />
      <ResetPassword />
    </div>
  </div>
</template>

<script>
import Register from '~/components/Register.vue';
import Login from '~/components/Login.vue';
import ResetPassword from '~/components/ResetPassword.vue';

export default {
  components: {
    Register,
    Login,
    ResetPassword
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
  }

  .auth-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>