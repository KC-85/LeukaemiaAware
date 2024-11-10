<template>
    <div v-if="visible" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <slot></slot>
        <button @click="closeModal" class="close-button" aria-label="Close modal">X</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["visible"],
    emits: ["update:visible"],
    methods: {
      closeModal() {
        this.$emit("update:visible", false);
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 500px;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 20px;
  }
  </style>
  