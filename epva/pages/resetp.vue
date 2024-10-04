<!-- pages/index.vue -->
<template>
    <section class="auth-container col container center pb-2 pt-2 pr-2 pl-2">
      <ResetPassword/>
    </section>
</template>

<script>
import ResetPassword from '~/components/ResetPassword.vue';

export default {
  components: {
    ResetPassword,
  }
};
</script>