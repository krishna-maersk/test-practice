import { mount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton";

describe("SubmitButton.vue", () => {
  const msg = "submit";
  const factory = (propsDats) => {
    return mount(SubmitButton, {
      propsData: {
        msg,
        ...propsDats,
      },
    });
  };

  it("display non authorized message", () => {
    const wrapper = factory();
    console.log(wrapper.html());
    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe("submit");
  });

  it("display a admin privileges message", () => {
    const isAdmin = true;
    const wrapper = factory({ isAdmin });
    console.log(wrapper.html());
    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("submit");
  });
});
