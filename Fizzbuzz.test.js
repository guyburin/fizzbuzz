const FizzBuzz = require("./FizzBuzz");
describe("Test FizzBuzz", () => {
  test("Test 1 expext 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1); // assert function
  });
});
