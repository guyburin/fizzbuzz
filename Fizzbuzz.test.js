const FizzBuzz = require("./FizzBuzz");
describe("Test FizzBuzz", () => {
  test("Test 1 expext 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1); // assert function
  });

  test("Test 3 expext Fizz", () => {
    const result = FizzBuzz.say(3);
    expect(result).toEqual("Fizz"); // assert function
  });

  test("Test 5 expext Buzz", () => {
    const result = FizzBuzz.say(5);
    expect(result).toEqual("Buzz"); // assert function
  });

  test("Test 15 expext FizzBuzz", () => {
    const result = FizzBuzz.say(15);
    expect(result).toEqual("FizzBuzz"); // assert function
  });
});
