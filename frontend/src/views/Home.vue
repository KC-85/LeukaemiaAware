<template>
    <div class="home">
      <h1>Welcome to PanCancerAwareApp</h1>
      <p>Your trusted source for pancreatic cancer insights.</p>
  
      <Carousel :slides="carouselSlides" autoplay :interval="3000">
        <template #default="{ slide }">
          <div class="carousel-content">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </template>
      </Carousel>
  
      <div class="quick-links">
        <Button label="Learn More" type="primary" @click="navigate('/research')" />
        <Button label="Contact Us" type="secondary" @click="navigate('/profile')" />
      </div>
    </div>
  </template>
  
  <script>
  import Carousel from "../components/common/Carousel.vue";
  import Button from "../components/common/Button.vue";
  
  export default {
    components: {
      Carousel,
      Button,
    },
    data() {
      return {
        carouselSlides: [
          { title: "Understand Symptoms", description: "Learn the early signs of pancreatic cancer." },
          { title: "Treatment Options", description: "Discover available treatment plans." },
          { title: "Support Groups", description: "Connect with others for support and care." },
        ],
      };
    },
    methods: {
      navigate(path) {
        this.$router.push(path);
      },
    },
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }
  
  .carousel-content {
    text-align: center;
    padding: 20px;
    background: #f4f6f8;
    border-radius: 8px;
  }
  
  .quick-links {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  </style>
  