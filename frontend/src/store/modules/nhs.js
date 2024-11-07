// src/store/modules/user.js
export default {
    state: {
      user: null,
      token: null,
    },
    mutations: {
      SET_USER(state, user) {
        state.user = user;
      },
      SET_TOKEN(state, token) {
        state.token = token;
      },
    },
    actions: {
      async login({ commit }, credentials) {
        const response = await apiClient.post("/auth/login", credentials);
        commit("SET_USER", response.data.user);
        commit("SET_TOKEN", response.data.token);
      },
    },
    getters: {
      isAuthenticated: state => !!state.token,
      getUser: state => state.user,
    },
  };
  