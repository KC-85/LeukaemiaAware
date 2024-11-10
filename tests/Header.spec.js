import { mount } from "@vue/test-utils";
import Header from "@/components/layout/Header.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: { template: "<div>Home</div>" } },
    { path: "/profile", name: "Profile", component: { template: "<div>Profile</div>" } },
    { path: "/research", name: "Research", component: { template: "<div>Research</div>" } },
  ],
});

describe("Header.vue", () => {
  it("renders navigation links", async () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router], // Provide the router mock
      },
    });

    // Wait for router to be ready
    await router.isReady();

    // Assert navigation links are rendered
    expect(wrapper.html()).toContain("Home");
    expect(wrapper.html()).toContain("Profile");
    expect(wrapper.html()).toContain("Research");
  });
});

