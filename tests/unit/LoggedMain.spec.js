import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LoggedMain from "@/views/LoggedMain.vue";

describe("LoggedMain.vue", () => {
  it("check counter receives correct date", () => {
    const lastDate = new Date("06/17/2021");
    const wrapper = shallowMount(LoggedMain, {
      props: { lastDate },
    });
    const counter = wrapper.findComponent({ name: "Counter" });
    expect(counter.props("date")).equal(lastDate);
  });
});
