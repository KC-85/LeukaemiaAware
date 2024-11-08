<template>
    <button :class="`button button--${type}`" @click="$emit('click')">{{ label }}</button>
  </template>
  
  <script>
  export default {
    props: {
      type: { type: String, default: "primary" },
      label: { type: String, required: true },
    },
  };
  </script>
  
  <style scoped>
  .button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .button--primary {
    background-color: #3498db;
    color: white;
  }
  
  .button--secondary {
    background-color: #2c3e50;
    color: white;
  }
  
  .button:hover {
    opacity: 0.9;
  }
  </style>
  