import DayjsSample from "@/components/DayjsSample";
import { mount } from "@vue/test-utils";
import dayjs from "dayjs";
import moment from "moment";

describe("dayjs Sample ", () => {
  it("render a time ", () => {
    const wrapper = mount(DayjsSample);
    console.log(wrapper.html());
    console.log("with Dayjs");
    console.log(dayjs("1970-00-00", "YYYY-MM-DD").isValid());
    console.log(dayjs("2021-03-06", "YYYY-MM-DD").isValid());
    console.log(dayjs("2021-03-06T04:00:00", "YYYY-MM-DD", true).isValid());
    console.log(dayjs("2021-03-06T04:00:00", "YYYY-MM-DD", false).isValid());
    console.log("with moment");
    console.log(moment("1970-00-00", "YYYY-MM-DD").isValid());
    console.log(moment("2021-03-06", "YYYY-MM-DD").isValid());
    console.log(moment("2021-03-06T04:00:00", "YYYY-MM-DD").isValid());
    console.log(moment("2021-03-06T04:00:00", "YYYY-MM-DD", true).isValid());
  });
  it("dayJs 00 date and 00 month ", function () {
    expect(dayjs("1970-00-00", "YYYY-MM-DD").isValid()).toBeFalsy();
  });
  it("moment 00 date and 00 month ", function () {
    expect(moment("1970-00-00", "YYYY-MM-DD").isValid()).toBeFalsy();
  });

  it("dayJs valid date ", function () {
    expect(dayjs("2021-03-06", "YYYY-MM-DD").isValid()).toBeTruthy();
  });
  it("moment valid date ", function () {
    expect(moment("2021-03-06", "YYYY-MM-DD").isValid()).toBeTruthy();
  });

  it("dayJs valid dateTime with date format", function () {
    expect(dayjs("2021-03-06T04:00:00", "YYYY-MM-DD").isValid()).toBeTruthy();
  });
  it("moment valid dateTime with date format ", function () {
    expect(moment("2021-03-06T04:00:00", "YYYY-MM-DD").isValid()).toBeTruthy();
  });

  it("dayJs valid dateTime with YYYY-MM-DD formatter with strict mode", function () {
    expect(
      dayjs("2021-03-06T04:00:00", "YYYY-MM-DD", true).isValid()
    ).toBeFalsy();
  });
  it("moment valid dateTime with YYYY-MM-DD formatter with strict mode ", function () {
    expect(
      moment("2021-03-06T04:00:00", "YYYY-MM-DD", true).isValid()
    ).toBeFalsy();
  });
});
