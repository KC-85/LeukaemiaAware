// src/composables/useApi.js
import { ref } from "vue";
import apiClient from "../api/axios";

export function useApi(endpoint) {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const fetchData = async (params = {}) => {
    loading.value = true;
    try {
      const response = await apiClient.get(endpoint, { params });
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, fetchData };
}
