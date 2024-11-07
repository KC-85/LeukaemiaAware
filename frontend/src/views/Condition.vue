<!-- src/views/Condition.vue -->
<template>
    <div v-if="loading" class="loading-spinner">
      <Spinner />
    </div>
    <div v-else>
      <h1>{{ data.name }}</h1>
      <p>{{ data.description }}</p>
      <button @click="animateCondition">Animate</button>
    </div>
  </template>
  
  <script>
  import { useApi } from "../composables/useApi";
  import { ref } from "vue";
  import gsap from "../plugins/gsap";
  
  export default {
    props: ["conditionId"],
    setup(props) {
      const { data, loading, fetchData } = useApi(`/nhs/conditions/${props.conditionId}`);
      fetchData();
  
      const animateCondition = () => {
        gsap.to(".condition", { opacity: 0, y: -50, duration: 1 });
      };
  
      return { data, loading, animateCondition };
    },
  };
  </script>
  
  <style scoped>
  .loading-spinner {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  