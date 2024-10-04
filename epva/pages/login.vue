<!-- pages/index.vue -->
<template>
    <section class="auth-container col container center pb-2 pt-2 pr-2 pl-2">
      <Login />
    </section>
</template>

<script>
import Login from '~/components/Login.vue';

export default {
  components: {
    Login,
  }
};
</script>