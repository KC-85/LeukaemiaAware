<template>
  <div class="carousel" ref="carousel">
    <div class="carousel-container" ref="carouselContainer" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-slide" v-for="(slide, index) in slides" :key="index">
        <slot :slide="slide"></slot>
      </div>
    </div>
    <div class="carousel-controls">
      <button @click="prevSlide" class="control control--prev" aria-label="Previous Slide">❮</button>
      <button @click="nextSlide" class="control control--next" aria-label="Next Slide">❯</button>
    </div>
  </div>
</template>

<script>
import gsap from "@/plugins/gsap"; // Import GSAP from your plugin

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
      const container = this.$refs.carouselContainer; // Use $refs to get the DOM element
      if (!this.slides || this.slides.length === 0) return; // Avoid errors if slides are missing
      gsap.to(container, {
        x: `-${(this.currentSlide + 1) * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      const container = this.$refs.carouselContainer;
      if (!this.slides || this.slides.length === 0) return; // Avoid errors if slides are missing
      gsap.to(container, {
        x: `-${(this.currentSlide - 1 + this.slides.length) % this.slides.length * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
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
