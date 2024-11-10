<template>
  <div class="research">
    <h1>Research Insights</h1>
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else class="research-grid">
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
import Spinner from "../components/common/Spinner.vue";
import { useApi } from "../composables/useApi";

export default {
  components: { Button, Spinner },
  setup() {
    const { data: articles, loading, fetchData } = useApi("/research");
    fetchData();
    return { articles, loading };
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
