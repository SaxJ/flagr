import Flag from "../../src/components/Flag.vue";
import { shallowMount } from "@vue/test-utils";

describe("Simple debug console tests", () => {
  it("Debug Console mounts correctly", () => {
    const wrapper = shallowMount(Flag);
    wrapper.setData({ flag: "hello" });
    expect(wrapper.text()).toContain("Debug Console");
  });
});
