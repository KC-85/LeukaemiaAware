<template>
    <header class="app-header">
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/research">Research</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
  };
  </script>
  
  <style scoped>
  .app-header {
    background-color: #2c3e50;
    color: white;
    padding: 10px;
  }
  
  .app-header ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  
  .app-header a {
    color: white;
    text-decoration: none;
  }
  
  .app-header a:hover {
    text-decoration: underline;
  }
  </style>
  