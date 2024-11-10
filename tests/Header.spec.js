import { mount } from "@vue/test-utils";
import Header from "@/components/layout/Header.vue";

describe("Header.vue", () => {
  it("renders navigation links", () => {
    const wrapper = mount(Header);

    // Assert the presence of specific navigation links
    expect(wrapper.html()).toContain("Home");
    expect(wrapper.html()).toContain("Profile");
    expect(wrapper.html()).toContain("Research");
  });

  it("renders router links correctly", () => {
    const wrapper = mount(Header);

    // Check that router-link components exist
    const links = wrapper.findAll("a");
    expect(links.length).toBe(3); // Should match 3 links
  });
});
