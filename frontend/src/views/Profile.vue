<template>
    <div class="profile">
      <h1>My Profile</h1>
      <div v-if="user">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
      <div v-else>
        <p>You are not logged in.</p>
      </div>
      <Button label="Edit Profile" type="primary" @click="editProfile" />
      <Button label="Logout" type="secondary" @click="logout" />
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  import Button from "../components/common/Button.vue";
  
  export default {
    components: { Button },
    computed: {
      ...mapState("user", ["user"]),
    },
    methods: {
      ...mapActions("user", ["logout"]),
      editProfile() {
        this.$router.push("/profile/edit");
      },
    },
  };
  </script>
  
  <style scoped>
  .profile {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  </style>
  