import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import MockDate from "mockdate";

beforeEach(() => {
  MockDate.set(new Date("06/17/2021"));
});

afterEach(() => {
  MockDate.reset();
});

describe("Counter.vue", () => {
  it("check zero count when date is actual", () => {
    const date = new Date("06/17/2021");
    const wrapper = shallowMount(Counter, {
      props: { date },
    });
    const [days, hours, minutes, seconds] = wrapper.findAll(
      ".counter__item-number"
    );
    expect(days.text()).equal("00");
    expect(hours.text()).equal("00");
    expect(minutes.text()).equal("00");
    expect(seconds.text()).equal("00");
  });

  it("check different count when different date", () => {
    const date = new Date("2021-06-15T20:30:01Z");
    const wrapper = shallowMount(Counter, {
      props: { date },
    });
    const [days, hours, minutes, seconds] = wrapper.findAll(
      ".counter__item-number"
    );
    expect(days.text()).equal("01");
    expect(hours.text()).equal("01");
    expect(minutes.text()).equal("29");
    expect(seconds.text()).equal("59");
  });
});
