<template>
  <div v-if="loading" class="loading-spinner">
    <Spinner />
  </div>
  <div v-else class="condition">
    <h1>{{ condition.name }}</h1>
    <p>{{ condition.description }}</p>
    <Button label="Back to Home" type="primary" @click="goBack" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Spinner from "../components/common/Spinner.vue";
import Button from "../components/common/Button.vue";

export default {
  props: ["id"],
  components: { Spinner, Button },
  computed: {
    ...mapState("nhs", ["condition"]),
    loading() {
      return !this.condition;
    },
  },
  methods: {
    ...mapActions("nhs", ["fetchConditionData"]),
    goBack() {
      this.$router.push("/");
    },
  },
  created() {
    this.fetchConditionData(this.id);
  },
};
</script>

<style scoped>
.condition {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style>
