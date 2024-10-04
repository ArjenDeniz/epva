<!-- pages/index.vue -->
<template>
    <section class="auth-container col container center pb-2 pt-2 pr-2 pl-2">
      <Register />
    </section>
</template>

<script>
import Register from '~/components/Register.vue';

export default {
  components: {
    Register,
  }
};
</script>