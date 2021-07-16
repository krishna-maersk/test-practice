import Vue from "vue";
import { mount, shallowMount } from "@vue/test-utils";

describe("two ways rendering", () => {
  it("should render", () => {
    const Child = Vue.component("Child", {
      name: "Child",
      template: "<div>Child component</div>",
    });

    const Parent = Vue.component("Parent", {
      name: "Parent",
      template: "<div><child /></div>",
    });

    const shallowWrapper = shallowMount(Child);
    const mountWrapper = mount(Child);

    console.log(shallowWrapper.html());
    console.log(mountWrapper.html());

    const shallowWrapper1 = shallowMount(Parent);
    const mountWrapper1 = mount(Parent);

    console.log(shallowWrapper1.html());
    console.log(mountWrapper1.html());
  });
});
