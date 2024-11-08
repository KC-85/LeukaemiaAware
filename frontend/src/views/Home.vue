<template>
  <div class="home">
    <h1>Welcome to PanCancerAwareApp</h1>
    <p>Your trusted source for pancreatic cancer insights.</p>

    <div class="quick-links">
      <Button label="Learn More" type="primary" @click="navigate('/research')" />
      <Button label="Contact Us" type="secondary" @click="navigate('/profile')" />
    </div>
  </div>
</template>

<script>
import Button from "../components/common/Button.vue";

export default {
  components: {
    Button,
  },
  methods: {
    navigate(path) {
      if (this.$router) {
        this.$router.push(path);
      } else {
        console.error("Router instance not available.");
      }
    },
  },
};
</script>

<style scoped>
.quick-links {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
