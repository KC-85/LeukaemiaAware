<template>
    <div class="carousel">
      <div class="carousel-container" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(slide, index) in slides" :key="index">
          <slot :slide="slide"></slot>
        </div>
      </div>
      <div class="carousel-controls">
        <button @click="prevSlide" class="control control--prev">❮</button>
        <button @click="nextSlide" class="control control--next">❯</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      slides: Array,
      autoplay: Boolean,
      interval: Number,
    },
    data() {
      return {
        currentSlide: 0,
        autoplayTimer: null,
      };
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      },
      startAutoplay() {
        if (this.autoplay) {
          this.autoplayTimer = setInterval(this.nextSlide, this.interval);
        }
      },
      stopAutoplay() {
        if (this.autoplayTimer) {
          clearInterval(this.autoplayTimer);
          this.autoplayTimer = null;
        }
      },
    },
    mounted() {
      this.startAutoplay();
    },
    beforeUnmount() {
      this.stopAutoplay();
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 800px;
    margin: auto;
  }
  
  .carousel-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-slide {
    min-width: 100%;
    flex: 1 0 100%;
  }
  
  .carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }
  
  .control {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
  }
  </style>
  