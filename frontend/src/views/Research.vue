<template>
    <div class="research">
      <h1>Research Insights</h1>
      <div class="research-grid">
        <div v-for="article in articles" :key="article.id" class="research-card">
          <h2>{{ article.title }}</h2>
          <p>{{ article.summary }}</p>
          <Button label="Read More" type="primary" @click="readMore(article.link)" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Button from "../components/common/Button.vue";
  
  export default {
    components: { Button },
    data() {
      return {
        articles: [
          { id: 1, title: "Breakthrough in Early Detection", summary: "Learn about advances in pancreatic cancer detection.", link: "#" },
          { id: 2, title: "New Treatment Options", summary: "Explore innovative treatments available today.", link: "#" },
          { id: 3, title: "Global Cancer Studies", summary: "Discover findings from global research efforts.", link: "#" },
        ],
      };
    },
    methods: {
      readMore(link) {
        window.open(link, "_blank");
      },
    },
  };
  </script>
  
  <style scoped>
  .research {
    text-align: center;
  }
  
  .research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .research-card {
    background: #f4f6f8;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  